<script setup>
import { onMounted, reactive } from "vue";
import { useNavStore, pagesEnum } from "@/stores/navStore";
import StatusBar from "@/components/StatusReporter/StatusBar.vue";
import StatusReportLoad from "@/components/SkeletonLoad/StatusReportLoad.vue";
import { statusData } from "../data";

const state = reactive({
  isLoading: true,
  status: {},
});

const mockLoadData = (timeMs) => {
  setTimeout(() => {
    state.status = statusData;
    state.isLoading = false;
  }, timeMs);
};

onMounted(() => {
  const { changeCurrent } = useNavStore();
  // change page state on nav.
  changeCurrent(pagesEnum.status);
  mockLoadData(1000);
});
</script>

<template>
  <h1 class="page-title">สถานะการซ่อม</h1>
  <StatusReportLoad v-if="state.isLoading" />
  <div v-else>
    <div class="id-row">
      <p class="work-id">รหัสงาน: {{ state.status.id }}</p>
      <button class="chat-btn">คุยกับช่าง</button>
    </div>
    <div class="info-row">
      <StatusBar
        class="bar"
        title="Progress"
        :status="state.status.progress + '%'"
      />
      <StatusBar
        class="bar"
        title="วันที่คาดว่าจะเสร็จ"
        :status="state.status.estimatedDone"
      />
      <StatusBar
        class="bar"
        title="วันที่เสร็จจริง"
        :status="state.status.done"
      />
    </div>
    <div class="interact-row">
      <button class="confirm-btn">ยืนยันนัดรับ</button>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  margin-bottom: 1.5rem;
}
.id-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.chat-btn {
  padding: 7px 17px;
}
.bar {
  margin-bottom: 1.5rem;
}
.interact-row {
  display: flex;
  justify-content: flex-start;
}
.confirm-btn {
  padding: 10px 32px;
  font-size: 1.05rem;
  margin-top: 1rem;
}
</style>
