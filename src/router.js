import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import AccommodationsRooms from "./components/AccommodationsRooms.vue";
import AccDeluxe from "./components/AccDeluxe.vue";
import AccPoolvilla from "./components/AccPoolvilla.vue";


const routes = [
    {
        path : "/",
        component : HomePage,
    },
    {
        path : "/accommodations",
        component : AccommodationsRooms,
        redirect: '/accommodations/deluxe',
        children : [
            {
                path : "deluxe",
                component : AccDeluxe,
            },
            {
                path : "poolvilla",
                component : AccPoolvilla,
            }
        ]
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});


export default router;