<script setup>
const props = defineProps({
  title: {
    reqired: true,
    type: String,
  },
  tasksNum: Number,
  // to: String, // link to page.
});
</script>

<template>
  <div class="task-report">
    <p class="title">{{ props.title }}</p>
    <div class="status-bar">
      <p>
        <span>{{ props.tasksNum }}</span>
        <span>: งาน</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.task-report {
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
