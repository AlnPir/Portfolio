import Vue from "vue";
import "./plugins/axios";
import "typeface-roboto";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
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

export default new Vuetify({
  icons: {
    iconfont: "fa", // default - only for display purposes
  },
});
