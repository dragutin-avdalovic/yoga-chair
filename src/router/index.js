import Vue from 'vue'
import Router from 'vue-router'
import ChairMain from '@/components/ChairMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChairMain',
      component: ChairMain
    }
  ]
})
