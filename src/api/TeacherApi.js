import api from "@/utils/api.js";

function findAll(pageNo, pageSize, params) {
    return api({
        url: "/teacher",
        method: "get",
        params: {
            page: pageNo,
            limit: pageSize,
            ...params
        }
    });
}

function deleteByIds(ids) {
    return api({
        url: "/teacher",
        method: "delete",
        data: ids
    })
}

function save(teacher) {
    return api({
        url: "/teacher",
        method: "post",
        data: teacher
    });
}

function update(teacher) {
    return api({
        url: "/teacher",
        method: "put",
        data: teacher
    });
}

function restoreByIds(ids) {
    return api({
        url: "/teacher",
        method: "patch",
        data: ids
    })
}

export {findAll, deleteByIds, save, update, restoreByIds}