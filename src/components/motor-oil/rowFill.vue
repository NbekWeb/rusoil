<script setup>
import Icon from "../icons/Icon.vue";

import { ref } from "vue";

const count = ref(1);
const basket = ref(false);
const like = ref(false);

const tobasket = () => (basket.value = !basket.value);
const toLike = () => (like.value = !like.value);

const change = (i) => {
  if (count.value + i > 0) {
    count.value = count.value + i;
  }
};

defineProps({
  type: String,
  default: "",
});
</script>
<template>
  <div class="py-3 gap-6 flex text-darkest-gray border-b border-off-white">
    <div class="relative bg-white">
      <div class="text-white absolute top-0 left-0">
        <span
          class="types rounded-sm text-sm bg-red text-white"
          v-if="type == 'aksi'"
        >
          АКЦИЯ
        </span>
        <span
          class="types rounded-sm text-sm bg-green-500 text-white"
          v-if="type == 'new'"
        >
          НОВИНКА
        </span>
      </div>
      <Icon
        @click="toLike"
        :class="[
          'point absolute top-0 right-0 justify-end text-2xl',
          like ? ' text-red' : 'text-gray-light',
        ]"
        :type="like ? 'heart-red' : 'heart'"
      />
      <img src="@/assets/img/moto.png" />
    </div>
    <div class="text-sm flex flex-col gap-3 flex-grow py-3">
      <p class="truncate text-base">
        Моторное масло BAROX ULTRA Revo Plus 5W-30 4 л. синт.
      </p>
      <div class="flex flex-col gap-2">
        <div class="flex gap-2">
          <span class="text-gray-light">Артикул</span>
          <span>1818004</span>
        </div>
        <div class="flex gap-2">
          <span class="text-gray-light">Бренд</span>
          <span>BAROX</span>
        </div>
        <div class="flex gap-2">
          <span class="text-gray-light">Класс вязкости SAE/ISO</span>
          <span>5W-30</span>
        </div>
        <div class="flex gap-2">
          <span class="text-gray-light">Тип масла</span>
          <span>Синтетическое</span>
        </div>
        <div class="flex gap-2">
          <span class="text-gray-light">Объем</span>
          <span>4 л</span>
        </div>
      </div>
    </div>
    <div class="py-3 flex flex-col gap-3">
      <div class="flex gap-1 items-center">
        <span class="text-base font-semibold">1 928 ₽</span>
        <div class="p-05 flex items-center rounded-sm">
          <Icon type="coin" />
          <span class="text-sm">45</span>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <span class="flex min-w-2 h-2 bg-green-500 rounded-full"></span>
        <span>В наличии 40 шт</span>
        <Icon type="mark" class="text-xl text-gray-light" />
      </div>
      <div class="flex gap-2 mt-3">
        <div class="p-1 flex bg-off-white rounded-sm">
          <div
            @click="change(-1)"
            class="w-10 h-10 rounded-8 bg-white point adding flex text-2xl items-center justify-center"
          >
            <Icon type="minus" />
          </div>
          <div
            class="h-10 w-14 flex items-center justify-center text-base font-semibold"
          >
            {{ count }}
          </div>
          <div
            @click="change(1)"
            class="w-10 h-10 rounded-8 bg-white point adding flex text-2xl items-center justify-center"
          >
            <Icon type="plus" />
          </div>
        </div>
        <div
          :class="[
            'rounded-sm point w-12 h-12 text-2xl flex items-center justify-center',
            basket ? 'bg-yellow-light' : ' check',
          ]"
          @click="tobasket"
        >
          <Icon :type="basket ? 'order' : 'check'" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/var.scss";

img {
  width: 200px;
}
.types {
  padding: 2px 8px;
}
.p-05 {
  padding: 2px;
  gap: 2px;
  background: #feca3466;
}

.check {
  border: 1px solid $color-yellow-light;
}
</style>
