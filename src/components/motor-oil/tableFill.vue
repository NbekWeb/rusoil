<script setup>
import Icon from "../icons/Icon.vue";
import Count from "../usefull/Count.vue";
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
  <div
    class="p-3 point justify-between text-base border-b border-off-white flex text-darkest-gray"
  >
    <img src="@/assets/img/moto.png" class="w-12 h-12" />
    <div class="flex flex-col gap-1">
      <span class="truncate"
        >Моторное масло BAROX ULTRA Revo Plus 5W-30 4 л. синт .</span
      >
      <div class="text-gray-light text-xs flex gap-2 items-center">
        <span> Артикул 1135004 </span>
        <span
          class="types rounded-sm text-sm bg-red text-white"
          v-if="type == 'aksi'"
        >
          АКЦИЯ
        </span>
        <span
          class="types rounded-sm text-sm bg-green-500 text-white"
          v-else-if="type == 'new'"
        >
          НОВИНКА
        </span>
      </div>
    </div>
    <div class="right-items items-center flex justify-between ml-3 gap-5" >
      <div class="flex gap-5 items-start">
        <div class="flex flex-col gap-1 text-xs">
          <div class="flex items-center gap-3">
            <span class="flex w-2 h-2 rounded-sm bg-green-500 flex"> </span>

            <span> В наличии 40 шт </span>
          </div>
          <span class="flex pl-5 text-gray-light">Под заказ: 200 шт </span>
        </div>
        <Icon type="mark" class="text-2xl text-gray-light" />
      </div>
      <div class="flex flex-col items-end pl-15 ">
        <span class="font-bold">123.78 ₽</span>
        <span class="text-gray-light line-through">140.11 ₽</span>
      </div>
      <div class="flex gap-2 ">
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
        <Icon
          @click.stop="toLike"
          :class="['point text-2xl', like ? ' text-red' : 'text-gray-light']"
          :type="like ? 'heart-red' : 'heart'"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/var.scss";

.types {
  padding: 4px 6px;
}

.right-items {
  min-width: max-content;
}

.check {
  border: 1px solid $color-yellow-light;
}
.point {
  transition: 0.3s ease;
}
@media only screen and (max-width: 1180px) {
.pl-15{
  padding-left: 20px;
}
}
@media only screen and (max-width: 1024px) {

}
@media only screen and (max-width: 768px) {

}
</style>
