import Vue from 'vue'
import VueRouter from 'vue-router'
import listFilm from '../views/list-film.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'listFilm',
    component: listFilm
  },
  {
    path: '/film/:id',
    name: 'film',
    component: () => import('../views/v-film.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
