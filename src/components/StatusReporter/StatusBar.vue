<script setup>
const props = defineProps({
  title: {
    reqired: true,
    type: String,
  },
  status: String,
  // to: String, // link to page.
});
</script>

<template>
  <div class="status-report">
    <p class="title">{{ props.title }}</p>
    <div class="status-bar">
      <p>
        <span>{{ props.status }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.status-report {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: start;
  margin-bottom: 1rem;
}
.status-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  align-items: center;
  height: 38px;
}
</style>
