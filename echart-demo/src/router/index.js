import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import echartVue from '@/components/echart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/echart',
      name: 'echart',
      component: echartVue
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
