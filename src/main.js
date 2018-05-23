import Vue from "vue";
import VueResource from "vue-resource";
import VueLazyload from "vue-lazyload";

import App from "./App";
import store from "./store";
import router from "./router";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";

Vue.use(VueResource);
Vue.use(VueMaterial);
Vue.use(VueLazyload, {
  error: require("./assets/loading.svg"),
  loading: require("./assets/loading.svg"),
  attempt: 1
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
