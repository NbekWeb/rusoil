<script setup>
import { RouterLink, RouterView } from "vue-router";
import Top from "@/components/main/Top.vue";
import Menu from "@/components/main/Menu.vue";
</script>
<template>
  <div class="main-view">
    <Top />
    <div class="w-full flex gap-0 body-main-view">
      <Menu />
      <RouterView />
    </div>
  </div>
</template>
<style lang="scss">
.main-view {
  height: 100vh;
  overflow-y: hidden;
  .body-main-view {
    height: calc(100vh - 80px);
  }
}
</style>
