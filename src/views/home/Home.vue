<template>

    <el-container class="home" >
      <el-aside :width="isOpen?'200px':'64px'">
        <div class="logo" :class="{minLogo: !isOpen}"></div>
        <el-menu 
        :default-active="$route.path"
        :collapse="!isOpen"
        :collapse-transition="false"
        router
        >
          <el-menu-item index="/">
            <template slot="title">
              <i class="el-icon-s-home"></i>首页
            </template>
          </el-menu-item>
          <el-menu-item index="/article">
            <template slot="title">
              <i class="el-icon-document"></i>内容管理
            </template>
          </el-menu-item>
          <el-menu-item index="/image">
            <template slot="title">
              <i class="el-icon-picture-outline"></i>素材管理
            </template>
          </el-menu-item>
          <el-menu-item index="/publish">
            <template slot="title">
              <i class="el-icon-position"></i>发布文章
            </template>
          </el-menu-item>
          <el-menu-item index="/comment">
            <template slot="title">
              <i class="el-icon-chat-dot-round"></i>评论管理
            </template>
          </el-menu-item>
          <el-menu-item index="/fans">
            <template slot="title">
              <i class="el-icon-present"></i>粉丝管理
            </template>
          </el-menu-item>
          <el-menu-item index="/setting">
            <template slot="title">
              <i class="el-icon-setting"></i>个人设置
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <span class="el-icon-s-fold" @click="toggleMenu()"></span>
                <span>江苏传智播客科技教育有限公司</span>
              </div>
            </el-col>
            <el-col :span="4" :offset="14">
              <div class="grid-content bg-purple">
                <img src="../../assets/avatar.jpg" style="width:30px;height:30px;vertical-align: middle;margin-right:8px"/>
                <span>性感荷官在线发<i class="el-icon-arrow-down"></i></span>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <!-- 二级路由展示 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
 
</template>

<script>
// 引入首页的标题组件
export default {
  name: "home",
  data () {
    return {
      isOpen:true
    }
  },
  methods:{
    toggleMenu () {
      // 切换状态  展开 收起
      this.isOpen = !this.isOpen
    }
  }
};
</script>

<style lang="less" scoped>
.home {
   width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
.el-aside {
 background-color: #024;
   .el-menu-item {
 background-color: #024;
  cursor: pointer;
   color: #fff;
   }
 .is-active {
   color: #409eff;
 }
  .logo {
    width: 100%;
    height: 60px;
    background-image: url(../../assets/logo_admin.png);
    background-repeat: no-repeat;
    background-position: center;
}
.minLogo{
      background-image: url(../../assets/logo_admin_01.png);
      background-size: 36px auto;
    }
}
  .el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: 1px solid #eee;
   .icon {
      font-size: 24px;
      vertical-align: middle;
    }
}
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
}

</style>