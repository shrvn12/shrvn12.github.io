import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: Projects },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        // wait a tick for the view to mount before measuring offsets
        setTimeout(() => {
          resolve({ el: to.hash, top: 72, behavior: 'smooth' })
        }, 60)
      })
    }
    return { top: 0 }
  },
})

export default router
