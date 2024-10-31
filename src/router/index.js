import { createRouter, createWebHistory } from 'vue-router'
import inicio from '../views/ClientesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio,
      props:{titulo:'Listado Clientes'}
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AgregarClienteView.vue'),
      props:{titulo:'Registro de Clientes'}
    } 
  ]
})

export default router
