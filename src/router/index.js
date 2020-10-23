import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const home = () => import('@/components/home')
const ceshi1 = () => import('@/components/ceshi')
const ceshi2 = () => import('@/components/ceshi2')
Vue.use(Router)

const originalPush= Router.prototype.push
Router.prototype.push=function push(location){
  return originalPush.call(this,location).catch(err => err)
}
export default new Router({
 mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        keepAlive:true
      }
      
    },
    {
     path:"/home",
     name:'home',
     component:home,
     meta:{
       keepAlive:false
     }
    }
  ]
})
