<template>
  <div class="asidenav">
    <template v-for="route in routes">
      <el-submenu
        v-if="route.children && route.children.length > 1"
        :index="route.path"
        :key="route.name"
      >
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{route.meta.title}}</span>
        </template>

        <asidenav :routes="route.children"></asidenav>
      </el-submenu>

      <el-menu-item v-else :index="route.path" :key="route.name" @click="skipRouter(route)">
        <i class="el-icon-menu"></i>
        <span slot="title">{{route.meta.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "asidenav",
  data() {
    return {};
  },
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  created() {
    console.log("routes", this.$route);
  },
  methods: {
    skipRouter(route) {
      console.log("222", route.path);
      this.$router.push(route.path);
    }
  }
};
</script>

<style lang="scss" scoped>
.asidenav {
  height: 100%;
  .aside {
    height: 100%;
  }
}
</style>


