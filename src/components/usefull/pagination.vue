<template>
  <div class="pagination flex gap-3 items-center font-semibold">
    <div
      @click="changeNum(num - 1)"
      class="inp flex items-center justify-center point border text-2xl rounded-sm h-12 w-12"
    >
      <Icon type="chevron-left" />
    </div>
    <div
      @click="changeNum(1)"
      :class="[
        'point w-12 h-12 rounded-sm flex items-center justify-center',
        num === 1 ? 'bg-dark-gray text-white' : '',
      ]"
    >
      1
    </div>
    <div
      v-if="num > 3"
      class="point w-12 h-12 rounded-sm flex items-center justify-center"
    >
      ...
    </div>
    <div
      v-for="n in getVisiblePages()"
      :key="n"
      @click="changeNum(n)"
      :class="[
        'point w-12 h-12 rounded-sm flex items-center justify-center',
        num === n ? 'bg-dark-gray text-white' : '',
        n > 3 && 'sm-hidden',
      ]"
    >
      {{ n }}
    </div>
    <div
      v-if="num < 248"
      class="point w-12 h-12 rounded-sm flex items-center justify-center"
    >
      ...
    </div>
    <div
      @click="changeNum(250)"
      :class="[
        'point w-12 h-12 rounded-sm flex items-center justify-center',
        num === 250 ? 'bg-dark-gray text-white' : '',
      ]"
    >
      250
    </div>
    <div
      @click="changeNum(num + 1)"
      class="inp rotate-180 flex items-center justify-center point border text-2xl rounded-sm h-12 w-12"
    >
      <Icon type="chevron-left" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Icon from "@/components/icons/Icon.vue";

const num = ref(1);

const changeNum = (i) => {
  if (i > 0 && i <= 250) {
    num.value = i;
  }
};

const getVisiblePages = () => {
  const pages = [];

  if (num.value <= 4) {
    // Show pages 2, 3, 4 for the initial range
    for (let i = 2; i <= 5; i++) {
      pages.push(i);
    }
  } else if (num.value > 247) {
    // Show pages 247, 248, 249 for the ending range
    for (let i = 247; i < 250; i++) {
      pages.push(i);
    }
  } else {
    // Show pages around the current number
    pages.push(num.value - 1, num.value, num.value + 1);
  }

  return pages;
};
</script>

<style scoped>
@import "@/assets/style/var.scss";

.point {
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
@media only screen and (max-width: 640px) {
  .sm-hidden {
    display: none;
  }
  .w-12 {
    width: 40px;
  }
  .h-12 {
    height: 40px;
  }
  .gap-3{
    justify-content: space-between;
    width: 100%;
  }
}
</style>
