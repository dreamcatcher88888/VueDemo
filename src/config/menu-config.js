module.exports = [{
  name: '权限管理',
  id: 'authority',
  icon:'el-icon-setting',
  sub: [{
    name: '用户管理',
    componentName: 'user'
  }, {
    name: '角色管理',
    componentName: 'role'
  }]
}, {
  name: '状态监控',
  id: 'stat',
  icon:'el-icon-menu',
  sub: [{
    name: '数据库监控',
    componentName: 'Database'
  }, {
    name: '服务器监控',
    componentName: 'server'
  }]
}]
