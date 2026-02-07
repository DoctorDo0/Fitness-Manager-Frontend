import api from "@/utils/api.js";

function login(params) {
    return api({
        url: "/users/login",
        method: "post",
        data: params
    });
}

function logout(params) {
    return api({
        url: "/users/logout",
        method: "post",
        data: params
    })
}

function getCaptcha() {
    return api({
        url: "/users/captcha",
        method: "get"
    })
}

export {login, logout, getCaptcha};