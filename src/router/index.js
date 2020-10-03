import Vue from 'vue'
import Router from 'vue-router'
import ElmentUi from '@/components/ElmentUi'
import menus from '@/config/menu-config'

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
  routes.push({
      path: '/',
      name: 'ElmentUi',
      component:ElmentUi
    })
})

export default new Router({routes})


// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'ElmentUi',
//       component:ElmentUi
//     }
//   ]
// })
