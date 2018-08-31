import Vue from 'vue'
import Router from 'vue-router'
import Test from '../components/Test.vue'
import User from '../components/User.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
    
  ]
})
