import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import AccommodationsRooms from "./components/AccommodationsRooms.vue";


const routes = [
    {
        path : "/",
        component : HomePage,
    },
    {
        path : "/accommodations",
        component : AccommodationsRooms,
        child : [
            {
                path : "deluxe",
                component : null,
            },            {
                path : "pooVilla",
                component : null,
            },
        ]
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});


export default router;