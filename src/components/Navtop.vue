<template>
  <el-container>
    <el-aside width="auto" class="header-logo tap" >
      <img class="logo" src="@/assets/logo_gaitubao_335x363_gaitubao_95x103.jpg" alt="Logo" />
      <h2 class="title">角色权限管理系统</h2>

    </el-aside>
    <el-aside width="auto" class="header-logo tap" >
      <el-avatar icon="el-icon-user-solid" class="headerLogo"></el-avatar>
      <span>luoyong</span>
    </el-aside>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-container{
   background-color: #5500FF;
}

.el-aside {
    display: flex;
    justify-content: center;
    align-items: center;
}

section{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  width: 50px;
}

.headerLogo,.logo{
  cursor: pointer;
}

.title {
  font-family:  Georgia,Palatino,serif;
  color: crimson;
}


</style>
