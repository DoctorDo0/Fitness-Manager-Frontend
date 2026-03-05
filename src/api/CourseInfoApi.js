import api from "@/utils/api.js";

function findAll(pageNo, pageSize, params) {
    return api({
        url: "/course-info",
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
        url: "/course-info",
        method: "delete",
        data: ids
    })
}

function save(teacher) {
    return api({
        url: "/course-info",
        method: "post",
        data: teacher
    });
}

function update(teacher) {
    return api({
        url: "/course-info",
        method: "put",
        data: teacher
    });
}

function getCourseMainInfo() {
    return api({
        url: "/course/mainInfo",
        method: "get"
    });
}

function getTeacherMainInfo() {
    return api({
        url: "/teacher/mainInfo",
        method: "get"
    });
}

export {findAll, deleteByIds, save, update, getCourseMainInfo, getTeacherMainInfo}