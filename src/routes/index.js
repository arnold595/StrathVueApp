import {createRouter,createWebHistorz}from 'vue router'

import Homepage from "./..components/Homepage.vue"
import ContactUs from "./..components/ContactUs.vue"
import AboutUS from "./..components/AboutUS.vue"
import Login from "./..components/Login.vue"

const routes = [
   
    {
        path: '/',
        name: 'Homepage',
        component: Homepage,
        },
        {
            path: '/Login',
            name: 'login',
            component: Login,
            },
                {
                    path: '/Contactus',
                    name: 'contactus',
                    component: ContactUs,
                    },
                    {
                        path: '/Aboutus',
                        name: 'aboutus',
                        component: AboutUS,
                        },
                       
                                    ]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router