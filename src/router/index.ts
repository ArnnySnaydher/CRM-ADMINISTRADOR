
import { createRouter, createWebHistory } from 'vue-router'
import Inicio from "../views/ClientesView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:Inicio,
      props:{titulo:"Listado de Clientes"}

    },{
      path:'/agregar-cliente',
      name: 'agregar-cliente',
      props:{titulo:"Agregar Cliente"},
      component: () =>import ('../views/NuevoClienteView.vue')
    }
  ]
})

export default router
