import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiscoverView from '../views/DiscoverView.vue'
import ListPlantsView from '../views/ListPlantsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'About - MyApp' }
  },
  {
    path: '/discover',
    name: 'discover',
    component: DiscoverView,
    meta: { title: 'Discover - MyApp' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/plants',
    name: 'plants',
    component: ListPlantsView,
    meta: { title: 'ListPlants - MyApp' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
