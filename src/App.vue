<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <h1>app</h1>
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  text-align: center;
}
h1 {
  color: red;
}
</style>
