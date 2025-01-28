<script setup>
import Icon from "../icons/Icon.vue";
import Count from "../usefull/Count.vue";
import { ref } from "vue";
const basket = ref(false);
const like = ref(false);

const tobasket = () => (basket.value = !basket.value);
const toLike = () => (like.value = !like.value);

defineProps({
  type: String,
  default: "",
});
</script>
<template>
  <div
    class="p-3 point rounded-sm bor gap-2 flex-col flex text-darkest-gray border-off-white"
  >
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
        @click.stop="toLike"
        :class="[
          'point absolute top-0 right-0 justify-end text-2xl',
          like ? ' text-red' : 'text-gray-light',
        ]"
        :type="like ? 'heart-red' : 'heart'"
      />
      <img src="@/assets/img/moto.png" />
    </div>
    <div class="text-sm flex flex-col flex-grow py-3">
      <p class="truncate text-base">
        Моторное масло BAROX ULTRA Revo Plus 5W-30 4 л. синт.
      </p>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <span>В наличии 40 шт</span>
          <span class="flex min-w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
        <Icon type="mark" class="text-xl text-gray-light" />
      </div>
      <div class="flex gap-1 items-center">
        <span class="text-base font-semibold">1 928 ₽</span>
        <div class="p-05 flex items-center rounded-sm">
          <Icon type="coin" />
          <span class="text-sm">45</span>
        </div>
      </div>

      <div class="flex gap-2 sm-beetween">
        <Count />
        <div
          :class="[
            'rounded-sm point w-12 h-12 text-2xl flex items-center justify-center',
            basket ? 'bg-yellow-light' : ' check',
          ]"
          @click.stop="tobasket"
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
@media only screen and (max-width: 640px) {
  .truncate {
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .h-12 {
    height: 40px;
  }
  .w-12 {
    width: 40px;
  }
  .py-3 {
    padding: 0;
  }
  .gap-2 {
    gap: 0px;
  }
  .gap-3 {
    gap: 6px;
  }
  .sm-beetween{
    justify-content: space-between;
  }
}
</style>
