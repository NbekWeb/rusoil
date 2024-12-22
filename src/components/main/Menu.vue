<script setup>
import MenuItem from "./MenuItem.vue";
import Icon from "../icons/Icon.vue";
import { useRoute } from "vue-router";

import { ref } from "vue";

const open = ref(false);

const toggleOpen = () => {
  open.value = !open.value;
};

const route = useRoute();

const mainMenu = [
  {
    name: "Главная",
    to: "",
    icon: "home",
  },
  {
    name: "Каталог",
    to: "catalog",
    icon: "list_search",
  },
  {
    name: "Прайс-лист",
    to: "price-list",
    icon: "rubl",
  },
  {
    name: "Услуги",
    to: "services",
    icon: "services",
  },
  {
    name: "Акции",
    to: "aksi",
    icon: "aksi",
  },
];

const personal = [
  {
    name: "Бонусы",
    to: "bonus",
    icon: "coin",
  },
  {
    name: "Корзина",
    to: "basket",
    icon: "order",
  },
  {
    name: "Взаиморасчёты",
    to: "settlements",
    icon: "box",
  },
  {
    name: "Рекламации",
    to: "complaints",
    icon: "point",
  },
  {
    name: "Уведомления",
    to: "msg",
    icon: "ring",
  },
  {
    name: "Избранное",
    to: "favorite",
    icon: "heart",
  },
];

const adding = [
  {
    name: "Бонусная программа",
    to: "bonus-app",
    icon: "coin-c",
  },
  {
    name: "Новости",
    to: "news",
    icon: "news",
  },
  {
    name: "Помощь",
    to: "help",
    icon: "search-c",
  },
];
</script>
<template>
  <div
    class="menu-bar text-base text-medium text-gray-light flex flex-col justify-between gap-5"
  >
    <div class="flex gap-2 flex-col main-menu-bar tr-scrollbar">
      <div class="flex flex-col gap-0">
        <template v-for="(item, i) of mainMenu" :key="i">
          <menu-item
            :name="item?.name"
            :icon="item?.icon"
            :selected="item?.to == route.path.slice(1)"
            :to="item?.to"
          />
        </template>
      </div>
      <div class="flex flex-col gap-0">
        <div class="py-2 px-3">Персональное</div>
        <div class="flex flex-col gap-0 pt-2">
          <template v-for="(item, i) of personal" :key="i">
            <menu-item
              :name="item?.name"
              :icon="item?.icon"
              :selected="item?.to == route.path.slice(1)"
              :to="item?.to"
            />
          </template>
        </div>
        <div class="py-2 px-3 flex gap-2 items-center">
          <Icon type="chevron" class="text-2xl" />
          <span> Больше </span>
        </div>
      </div>
      <div class="flex flex-col gap-0">
        <div class="py-2 px-3">Дополнительно</div>
        <div class="flex flex-col gap-0">
          <template v-for="(item, i) of adding" :key="i">
            <menu-item
              :name="item?.name"
              :icon="item?.icon"
              :selected="item?.to == route.path.slice(1)"
              :to="item?.to"
            />
          </template>
        </div>
      </div>
    </div>
    <div class="pb-4">
      <div class="select flex items-center gap-2 py-2 px-3">
        <Icon type="file" class="text-2xl" />
        <div class="flex gap-2 relative point" @click="toggleOpen()">
          <span class="truncate text-base"> ООО «ГК Русойл» № ГК-1/2018 </span>
          <Icon type="chevron" class="text-2xl" />
          <!-- <div
            class="absolute select-items flex flex-col w-full gap-1"
            v-if="open"
          >
            <span class="rounded-sm py-2 px-3  truncate bg-off-white"> ООО «ГК Русойл» № ГК-1/2018</span>
            <span class="bg-white py-2 px-3"> ООО «ГК Русойл» № ГК-1/2018</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.menu-bar {
  padding: 24px 12px;
  width: 320px;
  
  border-right: 1px solid $color-off-white;
  .main-menu-bar {
    overflow-x: auto;
  }
  .select-items {
    bottom: 100%;
  }
}
</style>
