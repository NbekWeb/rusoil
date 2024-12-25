<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import Icon from "@/components/icons/Icon.vue";
import LinkItems from "@/components/usefull/LinkItems.vue";
import Fill from "@/components/motor-oil/Fill.vue";
import Pagination from "@/components/usefull/pagination.vue";
import Filtr from "@/components/motor-oil/Filtr.vue";

const router = useRouter();
const open = ref(false);

const type = ref("table_fill");

const selectType = (name) => {
  type.value = name;
};

const toggleOpen = () => {
  open.value = !open.value;
};

const dropdownRef = ref(null);

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    open.value = false;
  }
};

const goItem = () => {
  router.push({ name: "item" });
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

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
</script>
<template>
  <div>
    <div class="px-8 py-6 text-darkest-gray border-b border-off-white">
      <LinkItems :links="links" />
      <h2 class="text-2xl pt-5 pb-6">Моторные масла</h2>
    </div>
    <div class="py-6 px-8 flex gap-6">
      <div class="flex-grow">
        <div class="flex items-center justify-between">
          <div class="select relative" ref="dropdownRef">
            <span
              @click="toggleOpen"
              :class="[
                'text-base select-item px-4 items-center justify-between point py-3 flex rounded-sm w-full',
                open ? 'opened' : '',
              ]"
            >
              Популярные
              <Icon type="chevron" class="text-2xl text-gray-light" />
            </span>
            <ul
              v-if="open"
              class="absolute w-full mt-2 rounded-sm py-3 px-2 flex flex-col gap-2"
            >
              <li class="px-2 rounded-sm py-2">Популярные</li>
              <li class="px-2 rounded-sm py-2">Популярные</li>
              <li class="px-2 rounded-sm py-2">Популярные</li>
            </ul>
          </div>
          <div class="flex items-center gap-1">
            <div
              @click="selectType('table_fill')"
              :class="[
                'p-3 rounded-sm point text-2xl',
                type == 'table_fill'
                  ? 'text-darkest-gray bg-off-white'
                  : 'text-gray-light',
              ]"
            >
              <Icon type="table_fill" />
            </div>
            <div
              @click="selectType('row_fill')"
              :class="[
                'p-3 rounded-sm point text-2xl',
                type == 'row_fill'
                  ? 'text-darkest-gray bg-off-white'
                  : 'text-gray-light',
              ]"
            >
              <Icon type="row_fill" />
            </div>
            <div
              @click="selectType('grid_fill')"
              :class="[
                'p-3 rounded-sm point text-2xl',
                type == 'grid_fill'
                  ? 'text-darkest-gray bg-off-white'
                  : 'text-gray-light',
              ]"
            >
              <Icon type="grid_fill" />
            </div>
          </div>
        </div>
        <div class="pt-6 filtrs flex gap-2 text-darkest-gray">
          <div class="point bg-yellow-light text-xs flex gap-2">
            Бренд: CHAMPION
            <Icon type="close" class="text-xl" />
          </div>
          <div class="point bg-yellow-light text-xs flex gap-2">
            Объём: от 0.5 до 60
            <Icon type="close" class="text-xl" />
          </div>
          <div class="point bg-off-white text-xs flex gap-2">
            Сбросить все
            <Icon type="close" class="text-xl" />
          </div>
        </div>
        <div :class="['mt-6', type == 'grid_fill' && 'grid-4 gap-6 ']">
          <fill type="aksi" :name="type" @click="goItem" />
          <fill :name="type" @click="goItem" />
          <fill type="new" :name="type" @click="goItem" />
          <fill v-for="i of 10" :key="i" :name="type" @click="goItem" />
        </div>
        <div class="mt-10 flex justify-between">
          <div class="point inp border rounded-sm py-3 px-4 text-base">
            Показать ещё
          </div>
          <pagination />
        </div>
      </div>
      <filtr />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.select {
  width: 236px;
  .select-item {
    border: 1px solid $color-gray-lighter;
    &:hover {
      border-color: $color-yellow-light;
    }
  }
  .opened {
    border-color: $color-yellow-light;
  }
  ul {
    list-style: none;
    border: 1px solid $color-gray-lighter;
    li {
      transition: 0.3s ease;
      &:hover {
        cursor: pointer;
        background: $color-off-white;
      }
    }
  }
}

.filtrs {
  div {
    padding: 6px 8px;
    border-radius: 40px;
  }
}

</style>
