<script setup>
import Icon from "../icons/Icon.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="mobile  grid-5 text-2xl w-full">
    <router-link
      :to="{ name: 'home' }"
      class="flex items-center justify-center text-gray-light"
    >
      <Icon type="home" />
    </router-link>
    <router-link
      :to="{ name: 'catalog' }"
      class="flex items-center justify-center text-gray-light"
    >
      <Icon type="list_search" />
    </router-link>
    <router-link
      :to="{ name: 'favorite' }"
      class="flex items-center justify-center text-gray-light"
    >
      <Icon type="heart" />
    </router-link>
    <router-link
      :to="{ name: 'basket' }"
      class="flex items-center justify-center text-gray-light"
    >
      <span class="w-6 h-6 relative">
        <Icon type="order" />
        <span
          class="order-wraper absolute text-white bg-red rounded-full flex items-center justify-center"
          >5</span
        >
      </span>
    </router-link>
    <router-link
      :to="{ name: 'myAccount' }"
      class="flex items-center justify-center text-gray-light"
    >
      <span class="w-6 h-6 relative">
        <Icon type="user" />
        <span class="wraper-user rounded-full flex items-center justify-center">
          <span class="bg-red rounded-full"></span>
        </span>
      </span>
    </router-link>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.mobile {
  display: none;
  height: 48px;
  border-top: 1px solid $color-gray-lighter;
  @media only screen and (max-width: 880px) {
    display: grid;
  }
}

.wraper-user {
  width: 10px;
  min-width: 10px;
  height: 10px;
  position: absolute;
  right: 0;
  background: #fff;
  top: -2px;
  span {
    width: 8px;
    min-width: 8px;
    height: 8px;
  }
}

.order-wraper {
  width: 16px;
  min-width: 16px;
  height: 16px;
  font-size: 10px;
  top: -4px;
  right: -14px;
}
</style>
