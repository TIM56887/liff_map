import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'leaflet/dist/leaflet.css';
import store from './store'
import Home from "./pages/Home.vue"
import MainMap from "./pages/MainMap.vue"

const routes = [
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/map',
            component:MainMap,
        }
    ]


const router = createRouter({
    history: createWebHistory(),
    routes
})
// 




// 创建 Vue 应用
const app = createApp(App)
app.use(router)
app.use(store);
app.mount('#app')
