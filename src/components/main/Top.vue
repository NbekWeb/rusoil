<script setup>
import Icon from "../icons/Icon.vue";
import { RouterLink } from "vue-router";
import Links from "./Links.vue";
import User from "./User.vue";
</script>
<template>
  <div class="top bg-dark-gray flex">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/img/logo.png" class="h-full" />
      </router-link>
    </div>
    <div class="container flex-grow gap-6 items-center flex">
      <div
        class="btn gap-2 text-base rounded-sm font-semibold bg-yellow-light catalog h-full flex items-center"
      >
        <Icon type="list_search" class="text-2xl" />
        <span class="">Каталог</span>
      </div>
      <div
        class="search h-full flex flex-grow items-center rounded-sm relative"
      >
        <input type="search" class="h-full w-full" />
        <Icon type="search" class="search-icon absolute" />
        <Icon type="cancel" class="cancel-icon absolute point" />
      </div>
      <Links />
      <User />
    </div>
  </div>
</template>
<style scoped lang="scss">
.top {
  padding: 12px 0;
  height: 80px;
  .logo {
    padding: 4px 0;
    padding-left: 24px;
    width: 320px;
  }
  .container {
    .catalog {
      padding: 0 16px;
    }
    .search {
      input {
        padding: 0 24px 0 48px;
      }
      .search-icon {
        left: 16px;
      }
      .cancel-icon {
        right: 8px;
      }
    }
  }
}
</style>
