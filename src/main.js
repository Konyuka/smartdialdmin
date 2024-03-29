import Vue from 'vue'
import App from './App.vue'
import router from "./router";


import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "bootstrap";

import "./assets/css/tailwind.css";
import "tailwindcss/tailwind.css";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
