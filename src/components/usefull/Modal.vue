<script setup>
import Filtr from "../motor-oil/Filtr.vue";
defineProps({
  type: String,
});
</script>
<template>
  <div class="main-modal">
    <Filtr />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/var.scss";

.main-modal {
  min-height: max-content;
  overflow-y: auto;
}
</style>
