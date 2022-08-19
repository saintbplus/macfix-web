<script setup>
import { onMounted } from "vue";
import { useNavStore, pagesEnum } from "@/stores/navStore";

const { changeCurrent } = useNavStore();

onMounted(() => {
  changeCurrent(pagesEnum.pendingList);
});
</script>

<template>
  <div>Pending Job View</div>
</template>

<style scoped></style>
