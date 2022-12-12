import {createRouter, createWebHashHistory} from "vue-router";
import About from "@/components/About.vue";
import HomePage from "@/components/HomePage.vue";
import ConcreteUniversity from "@/components/ConcreteUniversity.vue";
export default createRouter( {
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: HomePage},
        {path: "/about", component: About},
        {path: "/:universityName/faculties", component: ConcreteUniversity}
    ]
})