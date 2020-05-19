import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Navbar from "@/components/Navbar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("navbar", Navbar);
Vue.config.productionTip = false;
export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
