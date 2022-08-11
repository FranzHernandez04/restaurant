import { createRouter, createWebHistory } from "vue-router"

import FoodiesHome from "./pages/home"
import FoodiesMenu from "./pages/menu"
import Contact from "./pages/contact"
import AboutUs from "./pages/aboutUs"

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
        path: "/chi",
        name: "AboutUs",
        component: AboutUs,
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
