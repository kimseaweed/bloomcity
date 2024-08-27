import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import AccommodationsRooms from "./components/AccommodationsRooms.vue";


const routes = [
    {
        path : "/",
        component : HomePage,
    },
    {
        path : "/accommondations",
        component : AccommodationsRooms,
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});


export default router;