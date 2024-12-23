<script setup>
import tableFill from "../motor-oil/tableFill.vue";
</script>
<template>
  <div class="bg-white px-8">
    <h2 class="text-xl font-semibold py-6">Рекомендации</h2>

    <div class="flex flex-col">
      <tableFill type="aksi" />
      <tableFill />
      <tableFill type="new" />
      <tableFill v-for="i of 10" :key="i" />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
