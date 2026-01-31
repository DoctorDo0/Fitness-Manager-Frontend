import api from "@/utils/api.js";

function findAll(pageNo, pageSize, params) {
    return api({
        url: "/member",
        method: "get",
        params: {
            pageNo,
            pageSize,
            ...params
        }
    });
}

export {findAll}