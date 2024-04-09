import { createRouter, createWebHistory } from 'vue-router'

import Home from './../pages/Home.vue'
// import About from './../pages/About.vue'
// import Contact from './../pages/Contact.vue'

const router = new createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home }
    ]
});

// var maxmax = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
//     { path: '/cases', component: Cases },
//     { path: '/services', component: Services },
//     { path: '/blog', component: Blog },
//     { path: '/login', component: Login },
//     { path: '/contacts', component: Contacts },
//     { path: '/privacy-policy', component: PrivacyPolicy }
// ]

export default router;