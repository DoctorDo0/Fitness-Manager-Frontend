import {createRouter, createWebHistory} from "vue-router";
//路由
const routes = [
    {
        name: "main",
        path: "/main",
        component: () => import("@/components/views/Main.vue"),
    }, {
        name: "index",
        path: "",
        redirect: "/main",
    }, {
        name: "customer",
        path: "/customer",
        component: () => import("@/components/views/customer/Customer.vue")
    }, {
        name: "member",
        path: "/member",
        component: () => import("@/components/views/member/Member.vue")
    }
];
//创建路由转发器
const router = createRouter({
    routes,
    history: createWebHistory()
});
//导出路由转发器
export default router;