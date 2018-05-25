import Vue from "vue";
import VueResource from "vue-resource";
import VueLazyload from "vue-lazyload";

import App from "./App";
import store from "./store";
import router from "./router";
import VueMaterial from "vue-material";
// import VueAudioVisualizer from 'vue-audio-visualizer';
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/black-green-dark.css'
import 'vue-material/dist/theme/default.css'
import 'material-design-icons/iconfont/material-icons.css'
// Vue.use(VueAudioVisualizer);
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
