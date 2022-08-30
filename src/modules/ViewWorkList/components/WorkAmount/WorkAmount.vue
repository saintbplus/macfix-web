<script setup>
const props = defineProps({
  amount: Number,
});
</script>

<template>
  <div>
    <legend>จำนวนงานที่รอส่งซ่อม</legend>
    <h2>{{ amount }}</h2>
  </div>
</template>
