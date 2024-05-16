import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import dataV from "@jiaminghi/data-view"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  // 全局注册dataV
  dataV,

  render: (h) => h(App)
}).$mount("#app")
