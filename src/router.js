import { createRouter, createWebHistory } from "vue-router"

import FoodiesHome from "./pages/home"
import FoodiesMenu from "./pages/menu"
import Contact from "./pages/contact"

const routes = [
    {
        path: "/",
        name: "Home",
        component: FoodiesHome,
    },
    {
        path: "/menu",
        name: "Menu",
        component: FoodiesMenu,
    },
    {
        path: "/contatti",
        name: "Contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;