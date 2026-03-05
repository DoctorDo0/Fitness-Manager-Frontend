import api from "@/utils/api.js";

function login(params) {
    return api({
        url: "/users/login",
        method: "post",
        data: params
    });
}

function getUserName() {
    return api({
        url: "/users/getusername",
        method: "get"
    })
}

export {login, getUserName};