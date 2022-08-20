<script setup>
import { useNavStore, pagesEnum } from "@/stores/navStore";
import FeedTaskReporter from "@/components/FeedItem/FeedTaskReporter.vue";
import { onMounted, reactive } from "vue";

// mock report data from server
const reports = reactive({
  repairJob: 0,
  jobPending: 1,
  history: 8,
});

onMounted(() => {
  const { changeCurrent } = useNavStore();
  // change page state on nav
  changeCurrent(pagesEnum.other);
});
</script>

<template>
  <main>
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
    <FeedTaskReporter title="รายการรอส่งซ่อม" :tasksNum="reports.jobPending" />
    <FeedTaskReporter title="สถานะการซ่อม" :tasksNum="reports.repairJob" />
    <FeedTaskReporter
      title="ข้อมูลการส่งซ่อมในอดีต"
      :tasksNum="reports.history"
    />
    <div class="bottom">
      <button>คุยกับช่าง</button>
    </div>
  </main>
</template>

<style scoped>
.user {
  display: flex;
  justify-content: space-between;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 530px;
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
