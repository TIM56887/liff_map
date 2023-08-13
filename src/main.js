import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'leaflet/dist/leaflet.css';
import store from './store'
import Home from "./pages/Home.vue"
import NotFound from "./pages/NotFound.vue"
import MainMap from "./pages/MainMap.vue"
import Unauthorized from "./pages/Unauthorized.vue"
import Friend from "./pages/Friend.vue"
const routes = [
        {
          path: '/',
          
        },
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/map',
            component:MainMap,
        },
        {
            path: '/:catchAll(.*)',
            component:NotFound
        },
        {
          path:'/friend',
          component:Friend
        },
        {
          path: '/403',
          component: Unauthorized
        },
        {
          path: '/401',
          component: Unauthorized
        },
    ]


const router = createRouter({
    history: createWebHistory(),
    routes
})
// router.beforeEach((to, from, next) => {
//   liff.init({liffId: import.meta.env.VITE_LIFF_ID})
//       .then(() => {
//         if (liff.isLoggedIn()) {
          
//           next(); 
//         } else {
//           next('/403')
          
//         }   
//       });

//       })
router.beforeEach((to, from, next) => {
  const protectedRoutes = ['/map', '/home', '/friend'];
  if (protectedRoutes.includes(to.path)) { 
    
    liff.init({liffId: import.meta.env.VITE_LIFF_ID})
      .then(() => {
        if (liff.isLoggedIn()) {
          next();
        } else {
          next('/403');
        }   
      })
      .catch(error => {
        console.error("Error initializing LIFF:", error);
        
      });
  } else {
    next();
  }
});



const app = createApp(App)
app.use(router)
app.use(store);
app.mount('#app')
