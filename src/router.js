import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import AccommodationsRooms from "./components/AccommodationsRooms.vue";
import AccDeluxe from "./components/AccDeluxe.vue";
import AccPoolvilla from "./components/AccPoolvilla.vue";
import NotFound from "./components/NotFound.vue";


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
            },
            {
                path: ':pathMatch(.*)*',
                redirect : "/notfound"
            },
        ]
    },


    //그외의path
    {    
        path : "/notfound",
        component : NotFound,
    },
    {
        path : "/:pathMath(.*)*",
        redirect : "/notfound"
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});


export default router;