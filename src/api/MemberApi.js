import api from "@/utils/api.js";

function findAll(pageNo, pageSize) {
    return api({
        url: "/member",
        method: "get",
        params: {
            pageNo,
            pageSize
        }
    });
}

export {findAll}