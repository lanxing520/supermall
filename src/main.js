import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";
import vuetify from "./plugins/vuetify";
import FastClick from "fastclick";
import VueLazyload from "vue-lazyload";

import toast from "components/common/toast";

//解决移动端300ms点击延迟
FastClick.attach(document.body);

Vue.config.productionTip = false;

//添加事件总线对象
Vue.prototype.$bus = new Vue();
//安装toast插件
Vue.use(toast);

//使用Vue懒加载的插件
Vue.use(VueLazyload, {
  loading: ""
});

new Vue({
  router,
  store: store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
