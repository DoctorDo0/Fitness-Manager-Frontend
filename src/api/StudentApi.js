import api from "@/utils/api.js";

function findAll(pageNo, pageSize, params) {
    return api({
        url: "/student",
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
        url: "/student",
        method: "delete",
        data: ids
    })
}

function save(student) {
    return api({
        url: "/student",
        method: "post",
        data: student
    });
}

function update(student) {
    return api({
        url: "/student",
        method: "put",
        data: student
    });
}

function restoreByIds(ids) {
    return api({
        url: "/student",
        method: "patch",
        data: ids
    })
}

export {findAll, deleteByIds, save, update, restoreByIds}