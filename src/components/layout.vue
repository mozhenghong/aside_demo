<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <asidenav/>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <topbar/>
        </el-header>
        <el-main>
          <appmain/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asidenav from "./index";
import topbar from "./topbar";
import appmain from "./appmain";
export default {
  components: {
    asidenav,
    topbar,
    appmain
  }
};
</script>

<style lang="scss" scoped>
.layout{
    height: 100%;
    width: 100%;
    .el-container{
        height: 100%;
    }
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

