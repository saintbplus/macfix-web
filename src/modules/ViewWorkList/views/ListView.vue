<script setup>
import { onMounted, reactive } from "vue";
import { useNavStore, pagesEnum } from "@/stores/navStore";
import ListSkeleLoad from "@/components/SkeletonLoad/ListSkeleLoad.vue";
import WorkList from "../components/WorkList/WorkList.vue";
import { jobsData } from "../data/listData";

const state = reactive({
  pendingList: [],
  isLoading: true,
});

const mockLoad = (timeMs) => {
  setTimeout(() => {
    state.pendingList = jobsData.map((job) => ({
      id: job.id,
      title: job.device,
      date: job.requestDate,
    }));
    state.isLoading = false;
  }, timeMs);
};

onMounted(() => {
  mockLoad(2000);
  // change page state on nav.
  const { changeCurrent } = useNavStore();
  changeCurrent(pagesEnum.pendingList);
});
const greet = (event) => {
  console.log(event.target.value);
};
</script>

<template>
  <div>
    <h1 class="page-title">รายการรอส่งซ่อม</h1>
    <ListSkeleLoad v-if="state.isLoading" />
    <div v-else>
      <div class="list-info">
        <p class="list-title">รายการ</p>
      </div>
      <WorkList :items="state.pendingList" />
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
