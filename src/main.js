import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Navbar from "@/components/Navbar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.component("navbar", Navbar);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
