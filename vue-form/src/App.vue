<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm: function() {
      // form을 submit 하면 자동으로 새로고침이 됨. 그것을 방지하기 위해 사용하는 메서드 (일반 js에서)
      // event 인자 필요
      // vue의 submit.prevent 사용으로 인해 없앰
      // event.preventDefault();
      console.log(this.username, this.password);

      var url = "https://jsonplaceholder.typicode.com/users";
      var data = {
        username: this.username,
        password: this.password,
      };

      axios
        .post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
