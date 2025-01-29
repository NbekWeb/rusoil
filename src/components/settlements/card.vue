<script setup>
import Icon from "@/components/icons/Icon.vue";

defineProps({
  type: String,
  default: "",
});
</script>

<template>
  <div
    class="wrap-card text-sm text-gray-500"
    :class="type ? 'red-border' : 'default-border'"
  >
    <div class="top flex justify-between p-4 rounded-top items-center">
      <span class="text-red-900">Расчёт №</span>
      <span class="text-red font-semibold">№12039</span>
    </div>
    <div class="flex justify-between items-center px-4 py-2">
      <span>Дата заключения</span>
      <span class="text-darkest-gray">02 сен 2024</span>
    </div>
    <div class="flex justify-between items-center px-4 py-2">
      <span>Оплатить до</span>
      <span class="text-darkest-gray">06 окт 2024</span>
    </div>
    <div class="flex justify-between items-center px-4 py-2">
      <span>Просрочен дней</span>
      <span class="text-red">4</span>
    </div>
    <div class="flex justify-between items-center px-4 py-2">
      <span>Сумма отгрузки</span>
      <span class="text-darkest-gray">50 000 ₽ </span>
    </div>
    <div class="flex justify-between items-center px-4 py-2">
      <span>Сумма оплаты</span>
      <span class="text-red font-semibold">50 000 ₽ </span>
    </div>
    <div
      v-if="type"
      class="flex justify-between items-center px-4 py-2 rounded-bottom"
    >
      <span>Документы</span>
      <span class="text-darkest-gray">
        <Icon type="t-download" class="text-xl point"
      /></span>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";
.wrap-card {
  border: 1px solid;
  border-radius: 12px;
}

.red-border {
  border-color: $color-red-100;
  .rounded-top {
    background: rgba($color: $color-red-100, $alpha: 0.5);
  }
}
.default-border {
  border-color: $color-gray-lighter;
  .text-red {
    color: $color-darkest-gray;
  }
  .text-red-900 {
    color: $color-gray-500;
  }
  .text-red-100{
    color: $color-darkest-gray;
  }
  .rounded-top {
    background: $color-off-white;
  }
}
.rounded-top {
  border-radius: 12px 12px 0 0;
}
.rounded-bottom {
  border-radius: 0 0 12px 12px;
}
</style>
