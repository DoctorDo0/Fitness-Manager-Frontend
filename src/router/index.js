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
                name: "main-member",
                path: "/main/member",
                component: () => import("@/components/views/member/Member.vue")
            }, {
                name: "main-trainer",
                path: "/main/trainer",
                component: () => import("@/components/views/trainer/Trainer.vue")
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
        name: "trainer",
        path: "/trainer",
        component: () => import("@/components/views/trainer/Trainer.vue")
    }, {
        name: "member",
        path: "/member",
        component: () => import("@/components/views/member/Member.vue")
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