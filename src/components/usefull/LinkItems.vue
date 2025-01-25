<script setup>
import { RouterLink } from "vue-router";
defineProps({
  links: Array,
});
</script>

<template>
  <div class="links ">
    <div
      class="flex gap-2 items-center text-xs text-gray-light tr-scrollbar overflow-x-auto "
    >
      <template v-for="(link, i) of links" :key="i">
        <router-link :to="{ name: link?.to }" class="link text-gray-light min-w-max">
          {{ link?.name }}</router-link
        >
        <span v-if="links.length != i + 1"> / </span>
      </template>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.links {
  overflow-x: hidden;
  max-width: 100%;
}

.link {
  transition: 0.3s ease;
  &:hover {
    color: $color-darkest-gray;
  }
}
.min-w-max {
  min-width: max-content;
}
.overflow-x-auto {
  overflow-x: auto;
  max-width: 100% "";
}
</style>
