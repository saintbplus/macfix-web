<script setup>
import { onMounted, reactive } from "vue";
import { useNavStore, pagesEnum } from "@/stores/navStore";
import ListSkeleLoad from "@/components/SkeletonLoad/ListSkeleLoad.vue";
import WorkList from "../components/WorkList/WorkList.vue";
// test data
import { historyDataList } from "../data/historyData";

const state = reactive({
  isLoading: true,
  historyList: [],
});

function mockLoading(timeMs) {
  setTimeout(() => {
    state.historyList = historyDataList.map((hl) => ({
      id: hl.id,
      title: hl.device,
      date:
        hl.doneDate.getDate() +
        "-" +
        hl.doneDate.getMonth() +
        "-" +
        hl.doneDate.getFullYear(),
    }));
    state.isLoading = false;
  }, timeMs);
}

onMounted(() => {
  const { changeCurrent } = useNavStore();
  // change page state on nav.
  changeCurrent(pagesEnum.history);
  mockLoading(2000);
});
</script>

<template>
  <h1 class="page-title">History รายการซ่อม</h1>
  <ListSkeleLoad v-if="state.isLoading" />
  <div v-else>
    <div class="list-info">
      <p class="list-title">รายการ</p>
    </div>
    <WorkList :items="state.historyList" />
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
