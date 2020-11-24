import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'
import login from '@/views/Login'
import Main from '@/views/Main.vue'
import User from '@/components/User.vue'
import Role from '@/components/Role.vue'
import Permission from '@/components/Permission.vue'
import Database from '@/components/Database.vue'


Vue.use(Router)

var routes = []
// menus.forEach((item) => {
//   item.sub.forEach((sub) => {
//     routes.push({
//       path: `/${sub.componentName}`,
//       name: sub.componentName,
//       component: () => import(`@/components/${sub.componentName}`)
//     })
//   })
// })
routes.push(
{
  path:'/',
  name:'login',
  component:login
},{
  path:'/main',
  name:'main',
  component:Main,
  children:[
    {
      path:'user',
    component:User
    },
    {
      path:'role',
    component:Role
    },
    {
      path:'permission',
    component:Permission
    },

    {
      path:'database',
    component:Database
    }
  ]
}
 )

export default new Router({routes})
