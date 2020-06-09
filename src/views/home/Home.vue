<template>
  <div class="home">
  <el-container>
  <el-header>黑马头条</el-header>
  <el-container>
    <el-aside width="200px">
       <el-menu>
      <el-menu-item index="1">
        <template slot="title"><i class="el-icon-message"></i><router-link to="/">首页</router-link></template>
      </el-menu-item>
      <el-menu-item index="1">
        <template slot="title"><i class="el-icon-message"></i><router-link to="/article">内容管理</router-link></template>
      </el-menu-item>
      <el-menu-item index="1">
        <template slot="title"><i class="el-icon-message"></i> <router-link to="/image">素材管理</router-link></template>
      </el-menu-item>
      <el-menu-item index="1">
        <template slot="title"><i class="el-icon-message"></i><router-link to="/publish">发布文章</router-link></template>
      </el-menu-item>
      <el-menu-item index="1">
        <template slot="title"><i class="el-icon-message"></i><router-link to="/comment">评论管理</router-link></template>
      </el-menu-item>
      <el-menu-item index="1">
        <template slot="title"><i class="el-icon-message"></i> <router-link to="/fans">粉丝管理</router-link></template>
      </el-menu-item>
      <el-menu-item index="1">
        <template slot="title"><i class="el-icon-message"></i><router-link to="/setting">个人设置</router-link></template>
      </el-menu-item>
       </el-menu>
 
    </el-aside>
    <el-main>
      <!-- 江苏传智播客科技教育有限公司 -->
      <router-view></router-view>
      </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>

export default {
  name: 'home'

}
</script>
<style lang="less" scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>