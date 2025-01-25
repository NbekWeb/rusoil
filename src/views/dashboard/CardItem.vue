<script setup>
import Rekomend from "@/components/usefull/Rekomend.vue";
import { ref } from "vue";
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";
import Count from "@/components/usefull/Count.vue";
import Tab from "@/components/card-item/Tab.vue";
const selected = ref("");

const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: "Каталог",
    to: "catalog",
  },
  { name: "Смазочные материалы", to: "home" },
  {
    name: "Моторные масла",
    to: "motorOil",
  },
];

const changeSelected = (name) => {
  selected.value = name;
};
</script>
<template>
  <div class="card-item text-darkest-gray">
    <div class="px-8 py-6 text-darkest-gray border-b border-off-white">
      <LinkItems :links="links" />
    </div>
    <div class="p-8 grid-3 gap-6 ">
      <div class="relative ">
        <span class="types absolute p-3 rounded-sm text-sm bg-red text-white">
          АКЦИЯ
        </span>
        <img src="@/assets/img/moto.png" class="w-full" />
      </div>
      <div class="">
        <h2 class="text-2xl font-semibold mb-4">
          Моторное масло BAROX ULTRA Revo Plus 5W-30 4 л. синт.
        </h2>
        <Tab />
      </div>
      <div class="flex flex-col gap-6">
        <div class="shadow rounded-sm p-6">
          <div class="font-semibold flex items-center gap-2">
            <h3 class="">1 928 ₽</h3>
            <div class="p-05 flex items-center rounded-sm">
              <Icon type="coin" />
              <span class="text-sm">45</span>
            </div>
          </div>
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-3 my-4">
              <span class="min-w-2 h-2 bg-green-500 rounded-full"></span>
              В наличии 40 шт
            </div>
            <div class="flex items-center gap-1 opacity-50">
              Подробнее
              <Icon type="chevron" class="text-2xl -rotate-90" />
            </div>
          </div>
          <div class="flex gap-2">
            <Count />
            <div
              class="bg-yellow-light p-4 point rounded-sm flex-grow h-full flex items-center justify-center font-semibold text-base"
            >
              Добавить в корзину
            </div>
          </div>
          <p class="text-sm opacity-50 text-center mt-4">
            Наличие товара влияет только на срок доставки. Если товара нет в
            наличии или он находится в другом городе, то мы привезем вам его под
            заказ.
          </p>
        </div>
      </div>
    </div>
    <rekomend />
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.types {
  padding: 2px 8px;
}

.p-05 {
  padding: 2px;
  gap: 2px;
  background: #feca3466;
}

.bg-yellow-light {
  &:hover {
    background: rgba($color: $color-yellow-light, $alpha: 0.7);
  }
}

</style>
