<script setup>
import { useNavStore, navPages } from "@/stores/navStore";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";

const navStore = useNavStore();
const { show: navShow, current } = storeToRefs(navStore);
</script>

<template>
  <nav v-show="navShow">
    <ul class="nav-list">
      <li v-for="page in navPages" :key="page.n" class="nav-link">
        <RouterLink
          v-if="current === page.n"
          class="nav-link disabled"
          :to="page.link"
        >
          {{ page.text }}
        </RouterLink>
        <RouterLink v-else class="nav-link" :to="page.link">
          {{ page.text }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.disabled {
  color: red;
  pointer-events: none;
}
nav {
  flex-grow: 1;
  padding-left: 100px;
}
.nav-list {
  display: flex;
  justify-content: space-between;
}
.nav-link {
  margin-left: 1.5rem;
}
</style>
