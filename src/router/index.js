import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'
import login from '@/views/Login'
import Main from '@/views/Main.vue'

Vue.use(Router)

var routes = []
menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${sub.componentName}`)
    })
  })
})
routes.push(
{
  path:'/',
  name:'login',
  component:login
},{
  path:'/main',
  name:'main',
  component:Main
}
 )

export default new Router({routes})
