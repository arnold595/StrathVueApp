import {createRouter,createWebHistorz}from 'vue router'

import Homepage from "./..components/Homepage.vue"
import Events from "./..components/Events.vue"
import Courses from "./..components/Courses.vue"
import ContactUs from "./..components/ContactUs.vue"
import AboutUS from "./..components/AboutUS.vue"
import Library from "./..components/Library.vue"
import Partnerships from "./..components/Partnerships.vue"
import Alumni from "./..components/Alumni.vue"

const routes = [
   
    {
        path: '/',
        name: 'Homepage',
        component: Homepage,
        },
        {
            path: '/Events',
            name: 'events',
            component: Events,
            },
            {
                path: '/Courses',
                name: 'courses',
                component: Courses,
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
                        {
                            path: '/Library',
                            name: 'library',
                            component: Library,
                            },
                            {
                                path: '/Partnership',
                                name: 'partnership',
                                component: Partnerships,
                                },
                                {
                                    path: '/Alumni',
                                    name: 'alumni',
                                    component: Alumni,
                                       },
                                    ]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router