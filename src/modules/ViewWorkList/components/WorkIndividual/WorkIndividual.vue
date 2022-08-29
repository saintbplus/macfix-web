<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <table>
    <tr>
      <th>id</th>
      <th>device</th>
      <th>detail</th>
      <th>cost</th>
      <th>requestDate</th>
      <th>status</th>
    </tr>
    <tr>
      <td>{{ item.id }}</td>
      <td>{{ item.device }}</td>
      <td>{{ item.detail }}</td>
      <td>{{ item.cost }}</td>
      <td>{{ item.requestDate }}</td>
      <td>{{ item.status }}</td>
    </tr>
  </table>
</template>

<style scoped></style>
