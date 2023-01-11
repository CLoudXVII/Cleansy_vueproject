import { createRouter, createWebHashHistory } from "vue-router";

import servicesview from "@/views/v-services-view.vue";
import homeview from "@/views/v-home-view.vue"
import vReviews from '@/components/v-reviews.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/Home', component: homeview},
        {path: '/Services', component: servicesview},
        {path: '/Reviews', component: vReviews},
    ]
})