import api from "@/utils/api.js";

function findAll(pageNo, pageSize, params) {
    return api({
        url: "/appointment",
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
        url: "/appointment/cancel",
        method: "put",
        data: ids
    })
}

function save(appointment) {
    return api({
        url: "/appointment",
        method: "post",
        data: appointment
    });
}

function update(appointment) {
    return api({
        url: "/appointment",
        method: "put",
        data: appointment
    });
}

export {findAll, deleteByIds, save, update}