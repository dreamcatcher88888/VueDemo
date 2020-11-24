<template>
   <el-row class="tac">
      <el-col :span="24">
        <el-menu default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#0055ff"
        unique-opened
        router
        text-color="#fff"
        active-text-color="#ffd04b">
          <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
              <template slot="title">
                <i :class="item.icon"></i>
                <span v-text="item.name"></span>
              </template>
              <el-menu-item-group clmnass="over-hide" v-for="sub in item.sub" :key="sub.componentPath">
                    <el-menu-item :index="sub.componentPath" v-text="sub.name">
                    </el-menu-item>
              </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
   </el-row>
</template>

<script>
  import menu from '@/config/menu-config'

  export default {
      data () {
        return {
          menu: menu
        }
      },
      methods: {
        handleOpen (key, keyPath) {
          console.log(key, keyPath)
        },
        handleClose (key, keyPath) {
          console.log(key, keyPath)
        }
      }
    }
</script>

<style>
</style>
