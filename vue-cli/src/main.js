import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// 위 생성자 함수는 아래와 같음
/*
var App = {
  template: "<div>app</div>",
};
new Vue({
  el: "#app",
  components: {
    app: App,
  },
  render: (h) => h(App),
});
*/
