<script setup>
import Catalog from "@/components/home/catalog.vue";
import Aksi from "@/components/home/aksi.vue";
import News from "@/components/home/news.vue";
</script>
<template>
  <div class="">
    <div class="px-8 py-7 border-b border-off-white">
      <img src="@/assets/img/banner.png" class="w-full" />
    </div>
    <catalog />
    <aksi />
    <news />
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";
</style>
