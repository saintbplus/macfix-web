<script setup>
import { onMounted } from "vue";
import { useNavStore, pagesEnum } from "@/stores/navStore";

onMounted(() => {
  const { changeCurrent } = useNavStore();
  // change page state on nav.
  changeCurrent(pagesEnum.status);
});
</script>

<template>
  <div>Status View</div>
</template>

<style scoped></style>
