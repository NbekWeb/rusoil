<script setup>
import { ref } from "vue";
import Icon from "../icons/Icon.vue";
import Checkbox from "@/components/usefull/Checkbox.vue";

defineProps({
  check: {
    type: Boolean,
    default: false,
  },
});

const count = ref(1);

const change = (i) => {
  if (count.value + i > 0) {
    count.value = count.value + i;
  }
};
</script>

<template>
  <div class="p-3 flex items-center justify-between gap-1">
    <div class="flex items-center gap-6">
      <Checkbox :check="check" />
      <img src="@/assets/img/moto.png" class="w-12 rounded-8" />
      <div class="flex flex-col gap-1 text-xs">
        <span class="truncate">
          5/40 Visco 5000 ВР 208л. синт. API SN/CF Масло моторное
        </span>
        <span class="opacity-50">Артикул 19435</span>
      </div>
    </div>
    <div class="flex gap-6 items-center bor right-item">
      <div class="flex-col items-end flex gap-1">
        <span class="font-semibold">320 000 ₽</span>
        <span
          class="flex font-bold coin gap-1 items-center rounded-sm bg-yellow-light text-darkest-gray"
        >
          <Icon type="coin" class="text-xs" />
          <span>20</span>
        </span>
      </div>

      <Count />
      <Icon type="delete" class="text-gray-light text-2xl point" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.coin {
  padding: 2px 6px;
}
@media only screen and (max-width: 768px) {
  .p-3 {
    flex-direction: column;
    align-items: start;
    .gap-6{
      gap: 4px;
    }
    .right-item {
      width: 100%;
    }
  }
}
</style>
