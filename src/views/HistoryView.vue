<script setup>
import { onMounted } from "vue";
import { useNavStore, pagesEnum } from "@/stores/navStore";

const { changeCurrent } = useNavStore();

onMounted(() => {
  changeCurrent(pagesEnum.history);
});
</script>

<template>
  <div>History View</div>
</template>

<style scoped></style>
