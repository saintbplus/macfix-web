<script setup>
// this will fetch from server
const paragraphes = [
  "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
];
</script>

<template>
  <div class="term-box">
    <h1>Term Condition</h1>
    <div class="content">
      <p v-for="(p, index) in paragraphes" :key="index">
        {{ p }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.term-box {
  width: 500px;
  heigth: 500px;
  text-align: center;
}
.content {
  display: flex;
  flex-direction: column:
}
</style>
