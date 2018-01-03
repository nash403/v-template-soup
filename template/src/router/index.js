import Vue from 'vue'
import Router from 'vue-router'
import LandingView from '@/views/Landing'
import ErrorView from '@/views/Error'
import MaintenanceView from '@/views/Maintenance'
import NotFoundView from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingView
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: MaintenanceView
    },
    {
      path: '**',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})
