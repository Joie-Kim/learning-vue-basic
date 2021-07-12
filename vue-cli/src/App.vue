<template>
  <!-- 최상단 컴포넌트는 하나만 있어야 함 -->
  <div>
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
// 이렇게 객체로 불러왔던 것과 같음. 파일로 저장된 컴포넌트를 import from 구문으로 불러옴
/*
var AppHeader = {
  template: '<header><h1>Header</h1></header>'
}
*/
import AppHeader from "./components/AppHeader.vue";

export default {
  // 재사용성을 높이기 위해서 function()으로 정의하고, 새로운 객체를 반환하는 방식을 사용
  // 이전에는..
  /*
  new Vue({
    data: {
      str: 'hi'
    }
  })
  */
  data: function() {
    return {
      str: "Header",
    };
  },
  components: {
    "app-header": AppHeader,
  },
  methods: {
    renewStr: function() {
      this.str = "hi";
    },
  },
};
</script>

<style></style>
