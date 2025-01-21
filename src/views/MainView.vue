<script setup>
import { RouterLink, RouterView } from "vue-router";
import Top from "@/components/main/Top.vue";
import Mobile from "@/components/main/Mobile.vue";
import Menu from "@/components/main/Menu.vue";
</script>
<template>
  <div class="main-view">
    <Top />
    <div class="w-full flex gap-0 body-main-view">
      <Menu />
      <div class="custom-scrollbar wrapper">
        <RouterView />
      </div>
    </div>
    <Mobile />
  </div>
</template>
<style lang="scss">
.main-view {
  height: 100vh;
  overflow-y: hidden;
  .body-main-view {
    height: calc(100vh - 80px);
    @media only screen and (max-width: 1280px) {
      height: calc(100vh - 160px);
    }
    @media only screen and (max-width: 880px) {
      height: calc(100vh - 190px);
    }
    .wrapper {
      overflow-y: auto;
      flex-grow: 1;
    }
  }
}
</style>
