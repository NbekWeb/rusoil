<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <router-link
    :to="{ name: 'myAccount' }"
    class="flex h-full myAccount rounded-full items-center justify-center"
  >
    A
  </router-link>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";
.myAccount {
  min-width: 56px;
  max-height: 56px;
  color: $white;
  background: $color-gray-dark;
  border: 2px solid $color-gray-mid;
}
</style>
