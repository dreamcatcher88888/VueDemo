<template>
  <div id='bashboard'>
    <el-container>
     <el-header class="header">
       <Header />
     </el-header>
     <el-container>
        <el-aside width="200px">
          <NavMenu></NavMenu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
     </el-container>
    </el-container>
  </div>

</template>

<script>
  import NavMenu from '@/components/NavMenu'
  import Header from '@/components/Navtop'


  export default {
    name: 'main',
    components: {
      NavMenu,Header
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
