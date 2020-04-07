<template>
    <div>
      <el-container style="position: absolute;left:0;right:0;top:0;bottom:0; overflow: hidden;">
        <el-header class="d-flex align-items-center" style="background:#545c64">
          <a href="" class="h5 text-light mb-0 mr-auto">
            Leo
          </a>
           <el-menu
          :default-active="navBar.active"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item :index="index.toString()" v-for="(item,index) in navBar.list" :key="index">{{item.name}}</el-menu-item>
          <el-submenu index="6">
              <template slot="title">
                <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                admin
                </template>
              <el-menu-item index="6-1">修改</el-menu-item>
              <el-menu-item index="6-2">退出</el-menu-item>
         </el-submenu>
        </el-menu>
        </el-header>
        <el-container style="height:100%;overflow:auto;">
          <el-aside width="200px">
            <!-- 侧边布局 -->
            <el-row class="tac w-100">
                <el-col class="w-100">
                  <el-menu
                    default-active="2"
                    @select="letfnav"
                    >
                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                      </template>
                      <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                      </el-menu-item-group>
                      <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                      </el-menu-item-group>
                      <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                      </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                      <i class="el-icon-menu"></i>
                      <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                      <i class="el-icon-document"></i>
                      <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                      <i class="el-icon-setting"></i>
                      <span slot="title">导航四</span>
                    </el-menu-item>
                  </el-menu>
                </el-col>
                </el-row>
          </el-aside> 
          <el-main  style="height:100%;overflow:auto;">
            <!-- 主布局 --> 
              <li v-for="i in 100" :key="i">{{i}}</li>
          </el-main>
        </el-container>
      </el-container>
      <!-- <router-view></router-view> -->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        navBar:{
          active:'0',
          list:[{name:'首页'},{name:'商品'},{name:'订单'},{name:'会员'},{name:'设置'}]
        }
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      letfnav(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
</style>

