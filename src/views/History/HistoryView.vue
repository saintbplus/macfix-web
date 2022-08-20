<script setup>
import { onMounted, reactive } from "vue";
import { useNavStore, pagesEnum } from "@/stores/navStore";
import ListSkeleLoad from "@/components/SkeletonLoad/ListSkeleLoad.vue";
import WorkList from "@/components/WorkList/WorkList.vue";
// test data
import { historyDataList } from "./data";

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
  <h1 class="page-title">History View</h1>
  <ListSkeleLoad v-if="state.isLoading" />
  <WorkList v-else :items="state.historyList" />
</template>

<style scoped>
.page-title {
  margin-bottom: 1rem;
}
</style>
