<script setup>
import { RouterLink } from "vue-router";
import { useNavStore, pagesEnum } from "@/stores/navStore";
import { onMounted } from "vue";

onMounted(() => {
  const { changeCurrent } = useNavStore();
  changeCurrent(pagesEnum.home);
});
</script>

<template>
  <main>
    <img src="#" alt="Main Icon" />
    <h1>Message</h1>
    <RouterLink to="/feed">Start</RouterLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
