<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 컴포넌트 태그 입력 방식 -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: "App",
  components: {
    HelloWorld,
    // hello-world: HelloWorld 와 같은 내용
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
