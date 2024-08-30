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
<<<<<<< HEAD
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
=======
        child : [
            {
                path : "deluxe",
                component : null,
            },            {
                path : "pooVilla",
                component : null,
            },
>>>>>>> 5445726ce14b97bdfc6fba4d8116880fca6184d6
        ]
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});


export default router;