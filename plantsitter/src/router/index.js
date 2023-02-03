import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiscoverView from '../views/DiscoverView.vue'
import PlantsView from '../views/PlantsView.vue'
import DemandView from '../views/DemandView.vue'

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
    path: '/demande',
    name: 'demand',
    component: DemandView,
    meta: { title: 'Demande - MyApp' }
  },
  {
    path: '/plants',
    name: 'plants',
    component: PlantsView,
    meta: { title: 'Plants - MyApp' }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
