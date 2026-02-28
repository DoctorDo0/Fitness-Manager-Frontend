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
        data: ids
    })
}

function save(member) {
    return api({
        url: "/member",
        method: "post",
        data: member
    });
}

function update(member) {
    return api({
        url: "/member",
        method: "put",
        data: member
    });
}

function restoreByIds(ids) {
    return api({
        url: "/member",
        method: "patch",
        data: ids
    })
}

export {findAll, deleteByIds, save, update, restoreByIds}