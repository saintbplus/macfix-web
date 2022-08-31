<script setup>
defineProps({
  provider: {
    type: String,
    validator(value) {
      return ["google", "apple", "facebook"].includes(value);
    },
  },
});
</script>

<template>
  <button class="auth-popup">
    <span>Sign in with {{ provider }}</span>
  </button>
</template>

<style scoped>
.auth-popup {
  width: 300px;
  border-radius: 12px;
  height: 45px;
}
</style>
