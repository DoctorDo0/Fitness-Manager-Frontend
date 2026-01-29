import axios from "axios";

const api = axios.create({
    baseURL: "/api",
    timeout: 3000
});

//响应拦截器
api.interceptors.response.use(
    resp => resp.data,
    error => {
        return {
            code: 500,
            success: false,
            msg: error || "api接口调用失败"
        };
    }
);

export default api;
