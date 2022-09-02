<script setup>
const props = defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <div>
    <h3>จำนวนงาน</h3>
    <div class="miniBar">
      <div class="miniBarProgress1" :style="item.percentage.pending">
        pending job:{{ item.pending }}
      </div>
      <div class="miniBarProgress2" :style="item.percentage.completed">
        completed job:{{ item.completed }}
      </div>
      <div class="miniBarProgress3" :style="item.percentage.collecting">
        collecting job:{{ item.collecting }}
      </div>
    </div>
  </div>
</template>
<style>
.miniBarProgress1 {
  background-color: #7a4069;
  height: 100%;
  position: absolute;
  top: 0rem;
  left: 0rem;
}

.miniBarProgress2 {
  background-color: #ee6983;
  height: 100%;
  position: absolute;
  top: 0rem;
  left: 20%;
}

.miniBarProgress3 {
  background-color: #850e35;
  height: 100%;
  position: absolute;
  top: 0rem;
  left: 60%;
}

.miniBar {
  width: 100%;
  height: 25px;
  border: 1px solid #8a898a;
  position: relative;
}
</style>
