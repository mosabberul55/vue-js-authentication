import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import HomePage from "./pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import UserPage from "@/pages/UserPage";

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'home',
            component:HomePage
        },
        {
            path: '/user',
            name: 'user',
            component:UserPage
        },
        {
            path: '/login',
            component: LoginPage,
            name: 'login',
        }
    ]
})
export default router