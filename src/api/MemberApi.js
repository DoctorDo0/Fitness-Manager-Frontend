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

function deleteByIds(ids) {
    return api({
        url: "/member",
        method: "delete",
        params: {ids}
    })
}

export {findAll, deleteByIds}