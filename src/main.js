import Vue from "vue";
import App from "./App.vue";
import router from "../src/route/router";
import store from "./store";
import './plugins/element.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
