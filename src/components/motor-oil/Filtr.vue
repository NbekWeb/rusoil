<script setup>
import Icon from "../icons/Icon.vue";
import Switch from "../usefull/Switch.vue";
import Slider from "../usefull/Slider.vue";
import Checkbox from "../usefull/Checkbox.vue";
import { ref, watch } from "vue";

const showCategory = ref(false);
const showBrand = ref(false);
const obem = ref(false);

const selectedCategory = ref("");

const changeSelectedCategory = (name) => {
  selectedCategory.value = name;
};

const toggleShowCategory = () => (showCategory.value = !showCategory.value);
const toggleObem = () => (obem.value = !obem.value);
const toggleShowBrand = () => (showBrand.value = !showBrand.value);

const categories = [
  { name: "Все категории" },
  { name: "Моторные масла " },
  { name: "Технические жидкости" },
  { name: "Фильтры для авто" },
  { name: "Автохимия" },
  { name: "Аккумуляторы" },
  { name: "Аксессуары" },
  { name: "Шины и диски" },
];

const brends = [
  { name: "BAROX" },
  { name: "CHAMPION" },
  { name: "EURONOL" },
  { name: "HIGHWAY" },
  { name: "IDEMITSU" },
];

// Watcher to ensure the rangeValues are updated correctly when input values change
</script>

<template>
  <div class="p-3 text-darkest-gray text-base filtr-wrap">
    <!-- Category Dropdown -->
    <div
      @click="toggleShowCategory"
      class="flex items-center point justify-between p-3"
    >
      <span class="font-semibold">Смазочные материалы</span>
      <Icon
        type="chevron-left"
        :class="[
          'text-2xl text-gray-light',
          showCategory ? 'rotate-90' : '-rotate-90',
        ]"
      />
    </div>

    <div class="flex flex-col gap-1" v-show="showCategory">
      <div
        :class="[
          'item rounded-sm point',
          selectedCategory == item.name ? 'bg-off-white' : '',
        ]"
        v-for="(item, i) of categories"
        :key="i"
        @click="changeSelectedCategory(item.name)"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- Switch for "Sale" and "In stock" -->
    <div class="items-center p-3 flex justify-between">
      <span class="font-semibold"> Распродажа </span>
      <Switch />
    </div>

    <div class="items-center p-3 flex justify-between">
      <span class="font-semibold"> Только в наличии </span>
      <Switch />
    </div>

    <!-- Brand Dropdown -->
    <div
      @click="toggleShowBrand"
      class="flex items-center point justify-between p-3"
    >
      <span class="font-semibold"> Бренд</span>
      <Icon
        type="chevron-left"
        :class="[
          'text-2xl text-gray-light',
          showBrand ? 'rotate-90' : '-rotate-90',
        ]"
      />
    </div>

    <div class="flex flex-col gap-0 px-3" v-show="showBrand">
      <div
        :class="[
          'brand-item rounded-sm point py-2 flex items-center gap-2 flex',
        ]"
        v-for="(item, i) of brends"
        :key="i"
      >
        <Checkbox />
        <span>{{ item.name }}</span>
      </div>
    </div>

    <!-- Volume Range Section -->
    <div
      @click="toggleObem"
      class="flex items-center point justify-between p-3"
    >
      <span class="font-semibold"> Объем / л</span>
      <Icon
        type="chevron-left"
        :class="['text-2xl text-gray-light', obem ? 'rotate-90' : '-rotate-90']"
      />
    </div>

    <div v-show="obem" class="px-3">
      <Slider />
    </div>
    <div class="flex items-center point justify-between p-3">
      <span class="font-semibold"> Класс вязкости SAE/ISO</span>
      <Icon
        type="chevron-left"
        :class="['text-2xl text-gray-light -rotate-90']"
      />
    </div>
    <div class="flex items-center point justify-between p-3">
      <span class="font-semibold"> Класс вязкости SAE/ISO</span>
      <Icon
        type="chevron-left"
        :class="['text-2xl text-gray-light -rotate-90']"
      />
    </div>
    <div class="flex items-center point justify-between p-3">
      <span class="font-semibold"> Класс вязкости SAE/ISO</span>
      <Icon
        type="chevron-left"
        :class="['text-2xl text-gray-light -rotate-90']"
      />
    </div>
    <div class="flex items-center point justify-between p-3">
      <span class="font-semibold"> Класс вязкости SAE/ISO</span>
      <Icon
        type="chevron-left"
        :class="['text-2xl text-gray-light -rotate-90']"
      />
    </div>
    <div
      class="p-3 clear border rounded-sm point mt-3 flex justify-center font-semibold"
    >
      Сбросить фильтры
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

.clear {
  border-color: $color-gray-lighter;
  &:hover {
    border-color: transparent;
    background: rgba($color-yellow-light, 0.2);
  }
}

.filtr-wrap {
  min-width: 340px;
  width: 340px;

}

.item {
  padding: 6px 12px;
  &:hover {
    background: $color-off-white;
  }

  .brand-item {
    padding: 6px 12px;
  }
}


</style>
