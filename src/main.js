import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store: store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
