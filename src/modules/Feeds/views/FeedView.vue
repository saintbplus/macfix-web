<script setup>
import { useNavStore, pagesEnum } from "@/stores/navStore";
import StatusBar from "@/components/StatusReporter/StatusBar.vue";
import { onMounted, reactive } from "vue";
import StatusReportLoad from "@/components/SkeletonLoad/StatusReportLoad.vue";

// mock report data from server
const state = reactive({
  isLoading: true,
  reports: { repairJob: 0, jobPending: 1, history: 8 },
});

const mockLoad = (timeMs) => {
  setTimeout(() => {
    state.isLoading = false;
  }, timeMs);
};

onMounted(() => {
  mockLoad(2000);
  const { changeCurrent } = useNavStore();
  // change page state on nav
  changeCurrent(pagesEnum.other);
});
</script>

<template>
  <main>
    <StatusReportLoad v-if="state.isLoading" />
    <div class="feed-wrapper" v-else>
      <div class="user">
        <div class="user-greeting">
          <p>
            <span>สวัสดี,</span>
            <span class="username">user</span>
          </p>
        </div>
        <div class="user-menu">
          <button>User</button>
        </div>
      </div>
      <StatusBar
        title="รายการรอส่งซ่อม"
        :status="state.reports.jobPending + ' งาน'"
      />
      <StatusBar
        title="สถานะการซ่อม"
        :status="state.reports.repairJob + ' งาน'"
      />
      <StatusBar
        title="ข้อมูลการส่งซ่อมในอดีต"
        :status="state.reports.history + ' งาน'"
      />
      <div class="bottom">
        <button>คุยกับช่าง</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.user {
  display: flex;
  justify-content: space-between;
}

.feed-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 430px;
}

.bottom {
  display: flex;
  justify-content: flex-start;
}
.bottom button {
  margin-top: 0.5rem;
  padding: 10px 45px;
  font-size: 1.1rem;
}
</style>
