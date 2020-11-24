module.exports = [{
  name: '权限管理',
  id: 'authority',
  icon:'el-icon-setting',
  sub: [{
    name: '用户管理',
    componentPath: '/main/user'
  }, {
    name: '角色管理',
    componentPath: '/main/role'
  },
  {name:'权限配置',
  componentPath:'/main/permission'}]
}, {
  name: '状态监控',
  id: 'stat',
  icon:'el-icon-menu',
  sub: [{
    name: '数据库监控',
    componentPath: '/main/database'
  }, {
    name: '服务器监控',
    componentPath: '/main/server'
  }]
}]
