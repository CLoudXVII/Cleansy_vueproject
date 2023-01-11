import { createRouter, createWebHashHistory } from "vue-router";

import vHeader from "./components/v-header.vue"
import vForm from "./components/v-form.vue"
import vServices from "./components/v-services.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/Header', component: vHeader},
        {path: '/Form', component: vForm},
        {path: '/Services', component: vServices},
    ]
})