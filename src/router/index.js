import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from "../views/AboutView.vue"
import Login from "../views/LoginView.vue"
import ContactUs from "../views/ContactUsView.vue"
import Treatment from "../views/TreatmentView.vue"
import Charges from "../views/ChargesView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/about',
      name: 'about',
      component:About
    },
   
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/contactus',
      name: 'contactus',
      component:ContactUs
    },
    {
      path: '/treatment',
      name: 'treatment',
      component:Treatment
    },
    {
      path: '/charges',
      name: 'charges',
      component:Charges
    },

  ]
})

export default router
