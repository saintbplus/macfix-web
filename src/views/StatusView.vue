<script setup>
import { onMounted } from "vue";
import { useNavStore, pagesEnum } from "@/stores/navStore";

const { changeCurrent } = useNavStore();

onMounted(() => {
  changeCurrent(pagesEnum.status);
});
</script>

<template>
  <div>Status View</div>
</template>

<style scoped></style>
