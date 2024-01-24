import EditedCurrencies from '@/views/EditedCurrencies.vue'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { RouterName, RouterPath } from './types'

const routes = [
  {
    path: RouterPath.home,
    name: RouterName.home,
    component: Home
  },
  {
    path: RouterPath.edited,
    name: RouterName.edited,
    component: EditedCurrencies
  },
  {
    path: RouterPath.search,
    name: RouterName.search,
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
