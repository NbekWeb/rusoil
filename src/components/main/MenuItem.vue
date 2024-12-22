<script setup>
import Icon from "../icons/Icon.vue";
import { RouterLink } from "vue-router";

defineProps({
  name: String,
  icon: String,
  to: String,
  selected: Boolean,
});
</script>
<template>
  <router-link
    :to="'/' + to"
    :class="[
      'flex items-center text-darkest-gray gap-2 rounded-sm p-3 point  menu-item',
      { 'bg-off-white ': selected },
    ]"
  >
    <Icon
      :type="icon"
      :class="[
        'text-2xl ',
        selected && icon != 'coin' ? 'text-darkest-gray' : 'text-gray-light',
        icon == 'coin' ? 'text-orange-light' : 'icon',
      ]"
    />
    <span class="font-medium text-base">{{ name }} </span>
  </router-link>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.menu-item:hover {
  background: $color-off-white;
  transition: ease 0.3s;
  .icon {
    transition: ease 0.3s;
    color: $color-darkest-gray;
  }
}
</style>
