import Vue from "vue";
import vuetify from "./plugins/vuetify";
import "./plugins/axios";
import "typeface-roboto";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "@/assets/css/transition.css";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
