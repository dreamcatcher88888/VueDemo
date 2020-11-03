<template>
 
    <el-container>
     <el-header class="header">
       <vheader />
     </el-header>
     <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
     </el-container>
    </el-container>
 
</template>

<script>
  import NavMenu from '@/components/NavMenu'
  import Header from '@/components/Navtop'
  import Maincontent from '@/components/Main'

  export default {
    name: 'main',
    components: {
      'navmenu': NavMenu,
      'vheader': Header,
      'maincontent': Maincontent
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
