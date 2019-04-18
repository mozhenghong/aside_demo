import Vue from "vue";
import Router from "vue-router";
import routes from './routes'
// import Layout from "../src/components/layout.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});