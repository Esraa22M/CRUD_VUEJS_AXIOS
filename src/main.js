import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* bootstrap configuration for both css and js */
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

/* fontawsome configuration */
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// eslint-disable-next-line no-unused-vars
/* global custom style sheet */
import "./style.css";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
