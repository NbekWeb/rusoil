<script setup>
import { ref } from "vue";
import Icon from "../icons/Icon.vue";

const count = ref(1);
const change = (i) => {
  if (count.value + i > 0) {
    count.value = count.value + i;
  }
};
</script>
<template>
  <div
    class="p-1 text-darkest-gray flex bg-off-white rounded-sm items-center h-12"
  >
    <div
      @click.stop="change(-1)"
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
      @click.stop="change(1)"
      class="w-10 h-10 rounded-8 bg-white point adding flex text-2xl items-center justify-center"
    >
      <Icon type="plus" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.adding {
  span {
    opacity: 40%;
  }
  &:hover {
    span {
      opacity: 100%;
    }
  }
}
@media only screen and (max-width: 640px) {
  .h-12 {
    height: 40px;
  }
  .h-10{
    height: 32px;
  }
  .w-10{
    width: 32px;
  }
  
}
</style>
