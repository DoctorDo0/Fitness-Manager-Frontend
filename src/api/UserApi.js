import api from "@/utils/api.js";

function login(params) {
    return api({
        url: "/users/login",
        method: "post",
        data: params
    });
}

export {login};