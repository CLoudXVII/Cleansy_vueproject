import { createRouter, createWebHashHistory } from "vue-router";

import servicesview from "@/views/v-services-view.vue";
import homeview from "@/views/v-home-view.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: homeview},
        {path: '/Services', component: servicesview},
    ]
})