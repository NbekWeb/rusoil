<script setup>
import Checkbox from "@/components/usefull/Checkbox.vue";
import Icon from "@/components/icons/Icon.vue";
</script>

<template>
  <div class="py-3 text-sm">
    <div class="flex gap-1">
      <div class="flex py-1">
        <checkbox :check="true" />
      </div>
      <img src="@/assets/img/moto.png" class="h-12" />
      <div class="flex-gro1w flex flex-col gap-1">
        <div class="gap-10 flex">
          <p class="text-xs">
            5/40 Visco 5000 ВР 208л. синт. API SN/CF Масло моторное
          </p>
          <span class="flex items-start text-2xl text-gray-mid">
            <Icon type="menu" />
          </span>
        </div>
        <span class="text-gray-light"> Артикул 19435 </span>
        <div class="flex justify-between">
          <span class="text-gray-light">15 x 2 000 ₽</span>
          <span class="font-bold">30 000 ₽</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">


</style>
