<script setup>
import Icon from "@/components/icons/Icon.vue";
import Switch from "@/components/usefull/Switch.vue";

</script>
<template>
  <div class="px-6 mt-5 rounded-sm border bor-black-8 bg-gray-50">
    <div class="py-3 w-full flex justify-between border-b bor-black-8">
      <span class="font-semibold">Акции</span>
      <Switch />
    </div>
    <div class="py-3 w-full flex justify-between border-b bor-black-8">
      <span class="font-semibold">Новости компании</span>
      <Switch />
    </div>
    <div class="py-3 w-full flex justify-between">
      <span class="font-semibold">Статусы заказов</span>
      <Switch />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.bor-black-8 {
  border-color: rgba($color: $black, $alpha: 0.08);
}
</style>
