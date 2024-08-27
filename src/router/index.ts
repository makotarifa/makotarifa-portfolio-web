import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            const element = document.querySelector(to.hash);
            if (element) {
                console.log("Element found:", element);
                return {
                    el: to.hash,
                    behavior: "smooth"
                };
            }
        }
        return { x: 0, y: 0 };
    }
});

export default router;
