<script setup>
import Icon from "@/components/icons/Icon.vue";
</script>
<template>
  <div
    class="rounded-sm text-base border bor-black-8 px-5 py-3 bg-gray-50 flex flex-col gap-3"
  >
    <div class="flex items-center justify-between gap-2">
      <div class="items-center flex gap-3">
        <div
          class="min-w-12 sm-hidden h-12 bg-black-8 rounded-full flex items-center justify-center"
        >
          <Icon type="file" class="text-2xl opacity-40" />
        </div>
        <span class="font-semibold"
          >ООО «СМ РУСОЙЛ» №И-139/2018 от 23.04.2018</span
        >
      </div>
      <Icon type="pen" class="opacity-50 text-2xl" />
    </div>
    <div class="grid-4 gap-3">
      <div class="flex flex-col gap-1">
        <span class="opacity-50">Срок действия </span>
        <span> 01.01.2025 </span>
      </div>
      <div class="flex flex-col gap-1">
        <span class="opacity-50">Отсрочка платежа </span>
        <span>35 дней </span>
      </div>
      <div class="flex flex-col gap-1">
        <span class="opacity-50">Кредитный лимит</span>
        <span> 30 000 000 ₽</span>
      </div>
      <div class="flex flex-col gap-1">
        <span class="opacity-50">Задолженность </span>
        <span class="text-red">1 000 000 ₽ </span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

@media only screen and (max-width: 640px) {
  .sm-hidden {
    display: none;
  }
  .grid-4 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    .flex-col{
        flex-direction: row;
        justify-content: space-between;
    }
  }
 
  .text-base{
    font-size: 14px;
    line-height: 16px;
  }
  .text-2xl{
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
