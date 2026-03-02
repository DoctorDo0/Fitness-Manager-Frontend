import {createRouter, createWebHistory} from "vue-router";
import {getJwt, removeJwt} from "@/api/JwtApi.js";

//路由
const routes = [
    {
        name: "main",
        path: "/main",
        component: () => import("@/components/views/Main.vue"),
        children: [
            {
                name: "main-student",
                path: "/main/student",
                component: () => import("@/components/views/student/Student.vue")
            }, {
                name: "main-teacher",
                path: "/main/teacher",
                component: () => import("@/components/views/teacher/Teacher.vue")
            }
        ]
    }, {
        name: "index",
        path: "",
        redirect: "/main"
    }, {
        name: "login",
        path: "/login",
        component: () => import("@/components/views/Login.vue")
    }, {
        name: "teacher",
        path: "/teacher",
        component: () => import("@/components/views/teacher/Teacher.vue")
    }, {
        name: "student",
        path: "/student",
        component: () => import("@/components/views/student/Student.vue")
    }, {
        name: "setting",
        path: "/setting",
        component: () => import("@/components/views/Setting.vue")
    }, {
        name: "logout",
        path: "/logout"
    }
];

//创建路由转发器
const router = createRouter({
    routes,
    history: createWebHistory()
});

//路由守卫
router.beforeEach((to, from, next) => {
    if (to.name === "logout") {
        removeJwt();
        next("/login");
        return;
    }

    let jwt = getJwt();

    if (jwt) {
        if (to.name === "login") {
            next("/main");
        } else {
            next();
        }
    } else {
        if (to.name === "login") {
            next();
        } else {
            next("/login");
        }
    }
});

//导出路由转发器
export default router;