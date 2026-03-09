import api from "@/utils/api.js";

function getStudentNumber() {
    return api({
        url: "/student/getCount",
        method: "get"
    })
}

function getTeacherNumber() {
    return api({
        url: "/teacher/getCount",
        method: "get"
    })
}

function getCourseNumber() {
    return api({
        url: "/course/getCount",
        method: "get"
    })
}

function getCourseGroupWithTeacher() {
    return api({
        url: "/course-info/getCourseGroup",
        method: "get"
    })
}

function getCourseGroupWithStudent() {
    return api({
        url: "/appointment/getCourseGroup",
        method: "get"
    })
}

export {
    getStudentNumber,
    getTeacherNumber,
    getCourseNumber,
    getCourseGroupWithTeacher,
    getCourseGroupWithStudent,
}