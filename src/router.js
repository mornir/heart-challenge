import { createRouter, createWebHistory } from "vue-router"
import Home from "./pages/Home.vue"
import Reviews from "./pages/Reviews.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/reviews", component: Reviews },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
