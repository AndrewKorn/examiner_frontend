import {createRouter, createWebHashHistory} from "vue-router";
import About from "@/components/About.vue";
import HomePage from "@/components/HomePage.vue";
import ConcreteUniversity from "@/components/ConcreteUniversity.vue";
import Subjects from "@/components/Subjects.vue";
import Login from "@/components/Login.vue";
import Registration from "@/components/Registration.vue";
import ConcreteSubject from "@/components/ConcreteSubject.vue";
import ConcreteDeck from "@/components/ConcreteDeck.vue";
export default createRouter( {
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: HomePage},
        {path: "/login", component: Login},
        {path: "/registration", component: Registration},
        {path: "/about", component: About},
        {path: "/:universityName", component: ConcreteUniversity},
        {path: "/:universityName/:facultyName/:course/:semester/subjects", component: Subjects},
        {path: "/:universityName/:facultyName/:course/:semester/:subjectName/decks", component: ConcreteSubject},
        {path: "/:universityName/:facultyName/:course/:semester/:subjectName/:deckId/cards", component: ConcreteDeck},
    ]
})