<script setup>
import { useNavStore, pagesEnum } from "@/stores/navStore";
import StatusBar from "@/components/StatusReporter/StatusBar.vue";
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
    <StatusBar title="รายการรอส่งซ่อม" :status="reports.jobPending + ' งาน'" />
    <StatusBar title="สถานะการซ่อม" :status="reports.repairJob + ' งาน'" />
    <StatusBar
      title="ข้อมูลการส่งซ่อมในอดีต"
      :status="reports.history + ' งาน'"
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
