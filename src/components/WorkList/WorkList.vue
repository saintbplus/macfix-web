<script setup>
import { isArrayOfWorkList } from "./validator";
const props = defineProps({
  items: {
    type: Array,
    required: true,
    validator: isArrayOfWorkList,
  },
});
</script>

<template>
  <ul class="work-list">
    <li class="list-item" v-for="item in props.items" :key="item.id">
      <div>
        <p class="item-id">{{ item.id }}</p>
      </div>
      <div>
        <p class="title">{{ item.title }}</p>
      </div>
      <div>
        <p class="date">{{ item.date }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.work-list {
  display: flex;
  flex-direction: column;
}
.list-item {
  display: flex;
  background-color: grey;
  margin: 0.5rem 0;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-radius: 7px;
}
</style>
