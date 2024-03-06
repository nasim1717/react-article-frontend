import axios from "axios";
import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./useAuth";


const useAxios = () => {
    const { auth, setAuth } = useAuth();
    useEffect(() => {
        // Add a request intercepter
        const requestIntercept = api.interceptors.request.use((config) => {
            const authToken = auth?.token;
            if (authToken) {
                config.headers.Authorization = `Bearer ${authToken}`;
            }
            return config;
        }, (error) => Promise.reject(error));

        // Add a response intercepter
        const responseIntercept = api.interceptors.response.use((response) => response, async (error) => {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                // eslint-disable-next-line no-useless-catch
                try {
                    const refreshToken = auth?.refreshToken;
                    const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`, { refreshToken });
                    // const { accessToken, refreshToken } = response.data;

                    console.log(`New Token:`, response.data);
                    const authData = { ...auth, token: response?.data?.accessToken, refreshToken: response?.data?.refreshToken };
                    localStorage.removeItem("auth");
                    localStorage.setItem("auth", authData);
                    setAuth(authData);
                    originalRequest.headers.Authorization = `Bearer ${response?.data?.accessToken}`

                    return axios(originalRequest)
                } catch (error) {
                    throw error;
                }
            }
            return Promise.reject(error)
        });

        return () => {
            api.interceptors.request.eject(requestIntercept);
            api.interceptors.response.eject(responseIntercept);
        }

    }, [auth?.token]);

    return { api };
}

export { useAxios };

