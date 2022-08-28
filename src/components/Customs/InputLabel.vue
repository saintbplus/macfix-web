<script setup>
defineProps(["label", "id", "type", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="label-input">
    <label class="text-label" :for="id">{{ label }}</label>
    <input
      class="custom"
      :type="type"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.label-input {
  display: flex;
  justify-content: space-between;
  width: 320px;
}

.text-label {
  margin-right: 12px;
}

.custom {
  height: 26px;
  width: 230px;
}
</style>
