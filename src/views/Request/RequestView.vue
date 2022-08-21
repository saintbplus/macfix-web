<script setup>
import { onMounted, reactive } from "vue";
import { useNavStore, pagesEnum } from "@/stores/navStore";

const slots = reactive([
  {
    filled: false,
    url: "",
  },
  {
    filled: false,
    url: "",
  },
  {
    filled: false,
    url: "",
  },
]);

onMounted(() => {
  const { changeCurrent } = useNavStore();
  // change page state on nav.
  changeCurrent(pagesEnum.request);
});
</script>

<template>
  <main>
    <!-- row1 -->
    <h1 class="page-title">แจ้งอาการ</h1>

    <!-- row2 -->
    <div class="input-detail">
      <p class="instruction-text">อาการโดยประมาณ</p>
      <textarea wrap="hard" class="problem-input"></textarea>
    </div>

    <!-- row3 -->
    <div class="image-upload">
      <p class="instruction-text">รูปสูงสุด3รูป</p>
      <div class="upload-btn-wrap">
        <button class="upload-btn">อัพโหลด</button>
      </div>
      <div class="upload-frames">
        <div
          v-for="(slot, index) in slots"
          :key="'slot' + index"
          class="image-slot"
        >
          <!-- x mark use to remove image -->
          <div class="x-mark">x</div>
          <!-- render image from slot.url(contain image url on the internet.) -->
          <div v-if="slot.filled" class="image-wrap">
            <img :src="slot.url" />
          </div>
          <div v-else class="empty-slot"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.problem-input {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1.02rem;
  resize: none;
  height: 6.1rem;
  overflow: auto;
}
.input-detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
}
.instruction-text {
  margin-bottom: 1rem;
}
.image-upload {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.upload-frames {
  display: flex;
  justify-content: flex-start;
}
.upload-btn-wrap {
  margin-bottom: 1rem;
}
.upload-btn {
  font-size: 18px;
  padding: 7px 36px;
}
.x-mark {
  position: absolute;
  top: 0.6rem;
  right: 1rem;
  cursor: pointer;
}
.image-slot {
  border: 1px solid grey;
  width: 250px;
  height: 250px;
  font-size: 1.5rem;
  margin-right: 1.5rem;
}
</style>
