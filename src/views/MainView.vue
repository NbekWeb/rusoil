<script setup>
import { RouterLink, RouterView } from "vue-router";
import Top from "@/components/main/Top.vue";
</script>
<template>
  <div class="main-view">
    <Top />
    <RouterView />
  </div>
</template>
<style lang="scss">
.main-view {
  height: 100vh;
  overflow-y: hidden;
}
</style>
