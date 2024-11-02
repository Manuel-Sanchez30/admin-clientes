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
      component: () => import('../views/AgregarClienteView.vue'),
      props:{titulo:'Registro de Clientes'}
    },
    {
      path: '/editar-cliente/:id',
      name: 'editar-cliente',
      component: () => import('../views/EditarClienteView.vue'),
      props:{titulo:'Editar Cliente'}
    } 
  ]
})

export default router
