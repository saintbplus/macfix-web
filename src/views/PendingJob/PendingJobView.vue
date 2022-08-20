<script setup>
import { onMounted } from "vue";
import { useNavStore, pagesEnum } from "@/stores/navStore";

onMounted(() => {
  // change page state on nav.
  const { changeCurrent } = useNavStore();
  changeCurrent(pagesEnum.pendingList);
});
</script>

<template>
  <div>Pending Job View</div>
</template>

<style scoped></style>
