<script setup>
import { reactive, computed, onMounted } from "vue";
import ListSkeleLoad from "@/components/SkeletonLoad/ListSkeleLoad.vue";
import WorkIndividual from "../components/WorkIndividual/WorkIndividual.vue";
import { jobsData } from "../data/listData.js";
import { useRoute } from "vue-router";

const state = reactive({
  data: {},
  isLoading: true,
});
const route = useRoute();
onMounted(() => {
  let data = jobsData.find((job) => job.id === route.params.id);
  if (data === undefined) {
    state.data = {};
    state.isLoading = false;
    console.log(state.data);
    return;
  }
  state.data = data;
  state.isLoading = false;
});
</script>

<template>
  <div>
    <div>
      <h2>{{ $route.params.id }}</h2>
      <h1 class="page-title">รายการรอส่งซ่อม</h1>
      <ListSkeleLoad v-if="state.isLoading" />
      <div v-else>
        <WorkIndividual
          v-if="Object.keys(state.data).length !== 0"
          :item="state.data"
        />
        <h2 v-else>404</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  margin-bottom: 1rem;
}
.list-info {
  display: flex;
  justify-content: flex-start;
}
</style>
