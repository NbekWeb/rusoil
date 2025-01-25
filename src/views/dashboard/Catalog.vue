<script setup>
import { RouterLink } from "vue-router";

import Item1 from "@/assets/img/01.png";
import Item2 from "@/assets/img/02.png";
import Item3 from "@/assets/img/03.png";
import Item4 from "@/assets/img/04.png";
import Item5 from "@/assets/img/05.png";
import Item6 from "@/assets/img/06.png";
import Item7 from "@/assets/img/07.png";

import LinkItems from "@/components/usefull/LinkItems.vue";

const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: "Каталог",
    to: "catalog",
  },
];

const catalogs = [
  {
    img: Item1,
    title: "Смазочные материалы",
    num: "20 390",
    items: [
      { name: "Моторные масла" },
      { name: "Индустриальные масла" },
      { name: "Трансмиссионные масла" },
      { name: "Пластичные смазки" },
      { name: "Масла для малой техники" },
    ],
  },
  {
    img: Item2,
    title: "Технические жидкости",
    num: "2 390",
    items: [
      { name: "Охлаждающая жидкость, антифризы" },
      { name: "Стеклоомывающие жидкости" },
      { name: "Тормозные жидкости" },
      { name: "Мочевина для дизеля" },
      { name: "Смазочно-охлаждающие жидкости" },
    ],
  },
  {
    img: Item3,
    title: "Фильтры",
    num: " 390",
    items: [
      { name: "Масляные фильтры" },
      { name: "Воздушные фильтры" },
      { name: "Топливные фильтры" },
      { name: "Салонные фильтры" },
      { name: "Гидравлические фильтры" },
      { name: "Фильтры системы охлаждения" },
      { name: "Фильтры АКПП" },
    ],
  },
  {
    img: Item4,
    title: "Автохимия",
    num: "90",
    items: [
      { name: "Средства по уходу за автомобилем" },
      { name: "Размораживатели замков и стекол" },
      { name: "Клеи, герметики и фиксаторы" },
      { name: "Средства для очистки рук" },
      { name: "Присадки и добавки" },
    ],
  },
  {
    img: Item5,
    title: "Аксессуары",
    num: "2 390",
    items: [
      { name: "Инструмент" },
      { name: "Запчасти" },
      { name: "Уход за автомобилем" },
      { name: "Ароматизаторы, освежители" },
      { name: "Предметы первой необходимости" },
      { name: "Щетки стеклоочистителя" },
      { name: "Автоэлектрика" },
      { name: "Сопутствующие товары" },
    ],
  },
  {
    img: Item6,
    title: "Шины и диски",
    num: "210",
    items: [
      { name: "Легковые шины" },
      { name: "Грузовые шины" },
      { name: "Сельскохозяйственные шины" },
      { name: "Специальные шины" },
      { name: "Диски" },
      { name: "Комплектующие" },
    ],
  },
  {
    img: Item7,
    title: "Аккумуляторы",
    num: " 9",
    items: [{ name: "Аккумуляторы" }, { name: "Комплектующие" }],
  },
];
</script>
<template>
  <div class="text-darkest-gray">
    <div class="px-8 py-6 border-b border-off-white">
      <LinkItems :links="links" />
      <h2 class="text-2xl pt-5 pb-6 font-bold">Каталог</h2>
    </div>
    <div class="items gap-6 p-8">
      <template v-for="(catalog, i) of catalogs" :key="i">
        <div class="item bg-gray-50 rounded-sm p-6">
          <img :src="catalog?.img" class="w-12" />
          <div class="flex flex-col gap-4 mt-4">
            <div class="flex items-center justify-between">
              <span class="font-bold">{{ catalog?.title }}</span>
              <span class="font-medium text-gray-light">
                {{ catalog?.num }}
              </span>
            </div>
            <div class="flex gap-3 flex-col text-xs">
              <template v-for="(item, j) of catalog.items" :key="j">
                <router-link
                  :to="{name:'motorOil'}"
                  class="text-darkest-gray"
                >
                  {{ item?.name }}
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.items {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media only screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .item {
    transition: 0.3s ease;
    &:hover {
      background: $color-gray-lighter;
    }
  }
}
@media only screen and (max-width: 1280px) {
  .pb-6 {
    padding-bottom: 0;
  }
}
@media only screen and (max-width: 640px) {
  .text-2xl {
    font-size: 20px;
    line-height: 24px;
  }
  .py-6 {
    padding-top: 16px;
    padding-bottom: 0;
  }
 
  .gap-6 {
    gap: 16px;
  }
  .p-8 {
    padding: 16px;
  }
  .pt-5 {
    padding-top: 0px;
  }
  .p-6 {
    padding: 16px;
  }
  .w-12{
    width: 36px;
  }
}
</style>
