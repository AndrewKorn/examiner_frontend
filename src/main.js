import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

export const API_BASE_URL = "http://localhost:8080/"


const app = createApp(App)


app.use(router)
app.mount('#app')
