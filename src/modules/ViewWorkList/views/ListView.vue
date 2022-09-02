<script setup>
import { onMounted, reactive, computed } from "vue";
import { useNavStore, pagesEnum } from "@/stores/navStore";
import ListSkeleLoad from "@/components/SkeletonLoad/ListSkeleLoad.vue";
import WorkList from "../components/WorkList/WorkList.vue";
import WorkAmount from "../components/WorkAmount/WorkAmount.vue";
import { jobsData } from "../data/listData";
import { quickSort } from "../quickSort.js";
import { categorize } from "../categorize.js";
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
      status: job.status,
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
const amountOfWork = computed(() => {
  return categorize(state.pendingList);
});
const categorizeWork = computed(() => {
  state.pendingList = quickSort(
    state.pendingList,
    0,
    state.pendingList.length - 1
  );
});
</script>

<template>
  <div>
    <h1 class="page-title">รายการรอส่งซ่อม</h1>
    <ListSkeleLoad v-if="state.isLoading" />
    <div v-else>
      <WorkAmount :item="amountOfWork" />
      <div>
        <label for="cars">ใช้ตัวกรอง:</label>
        <select>
          <option value="" selected disabled hidden>เลือก filter</option>
          <option @click="categorizeWork">ราคา(ต่ำ-สูง)</option>
        </select>
      </div>
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
