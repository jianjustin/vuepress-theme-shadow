import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: r => require.ensure([], () => r(require('../docs/home.md')))
    },{
    path: '/post',
    name: 'post',
    component: r => require.ensure([], () => r(require('../docs/home.md')))
    }
  ]
})
