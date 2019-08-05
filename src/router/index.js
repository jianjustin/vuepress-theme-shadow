import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    path: '/post',
    name: 'post',
    component: r => require.ensure([], () => r(require('../docs/post.md')))
    }
  ]
})
