import api from "@/utils/api.js";

function findAll(pageNo, pageSize, params) {
    return api({
        url: "/course",
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
        url: "/course",
        method: "delete",
        data: ids
    })
}

function save(course) {
    return api({
        url: "/course",
        method: "post",
        data: course
    });
}

function update(course) {
    return api({
        url: "/course",
        method: "put",
        data: course
    });
}

function restoreByIds(ids) {
    return api({
        url: "/course",
        method: "patch",
        data: ids
    })
}

export {findAll, deleteByIds, save, update, restoreByIds}