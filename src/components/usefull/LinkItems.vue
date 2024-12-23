<script setup>
import { RouterLink } from "vue-router";
defineProps({
  links: Array,
});
</script>

<template>
  <div class="flex gap-2 items-center text-xs text-gray-light">
    <template v-for="(link, i) of links" :key="i">
      <router-link :to="{ name: link?.to }" class="link text-gray-light">
        {{ link?.name }}</router-link
      >
      <span v-if="links.length != i + 1"> / </span>
    </template>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.link {
  transition: 0.3s ease;
  &:hover {
    color: $color-darkest-gray;
  }
}
</style>
