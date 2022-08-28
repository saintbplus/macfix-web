<script setup>
import { ref } from "vue";
import InputLabel from "@/components/Customs/InputLabel.vue";

const login = ref({
  username: "",
  password: "",
});
</script>

<template>
  <div class="login-page">
    <div class="login-box">
      <form>
        <InputLabel
          v-model="login.username"
          id="username"
          label="username"
          type="text"
        />
        <InputLabel
          v-model="login.password"
          id="password"
          label="password"
          type="password"
        />
        <button>Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
