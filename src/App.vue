<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderNavigator from "@/components/HeaderNavigator/HeaderNavigator.vue";
</script>

<template>
  <header>
    <div class="header-inner">
      <div class="icon">
        <RouterLink to="/feed">App Icon</RouterLink>
      </div>
      <HeaderNavigator />
    </div>
  </header>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  background-color: grey;
  height: 93px;
  margin-bottom: 50px;
}

.header-inner,
.wrapper {
  height: 93px;
  max-width: 1444px;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wrapper {
  text-align: center;
}
</style>
