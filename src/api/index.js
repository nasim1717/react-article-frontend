import axios from "axios";

export const api = axios.create({
    baseURL: 'https://article-json-server-1.onrender.com',
});

