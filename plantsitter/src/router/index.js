import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListPlantsView from '../views/ListPlantsView.vue'
import DemandView from '../views/DemandView.vue'
import MyDemandsView from '../views/MyDemandsView.vue'
import DecoView from '../views/DecoView.vue'
import LoginView from '../views/LoginView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'About - MyApp' }
  },
  {
    path: '/demands',
    name: 'demands',
    component: MyDemandsView,
    meta: { title: 'Demands - MyApp' }
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
    component: ListPlantsView,
    meta: { title: 'Plants - MyApp' }
  },
  {
    path: '/deco',
    name: 'deco',
    component: DecoView,
    meta: { title: 'Plants - MyApp' }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
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
