import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

const useAuthCheck = () => {
    const { setAuth } = useAuth()
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const localAuth = localStorage?.getItem("auth");
        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.token && auth?.user) {
                setAuth(auth)
            }
        }
        const time = setTimeout(() => {
            setAuthChecked(true);
        }, 1000);

        return () => {
            clearTimeout(time);
        }
    }, [setAuthChecked, setAuth]);

    return authChecked;
};

export default useAuthCheck;