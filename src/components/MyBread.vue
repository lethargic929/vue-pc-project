<template>
  <div class="bread">
    <!-- 面包屑组件 -->
   <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item> <slot></slot></el-breadcrumb-item>
</el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'MyBread'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
