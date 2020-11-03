import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/project/:name',
        name: 'Project',
        props: true,
        component: Project
    }
]

const router = new VueRouter({
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
      }
})

export default router