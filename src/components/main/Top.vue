<script setup>
import Icon from "../icons/Icon.vue";
import { RouterLink } from "vue-router";
import Links from "./Links.vue";
import User from "./User.vue";
import { ref } from "vue";

const search = ref("");

const onSearchChange = (event) => {
  search.value = event.target.value;
};
const clearSearch = () => {
  search.value = "";
};
</script>
<template>
  <div class="bg-dark-gray wrapper-top">
    <div class="mobile-top justify-between items-center">
      <div class="flex text-sm text-gray-500 gap-2 items-center">
        <span> ООО «ГК Русойл» № ГК-1/2018 </span>
        <Icon type="chevron" class="text-xl" />
      </div>
      <span
        class="flex font-bold coin gap-1 items-center rounded-sm bg-yellow-light text-darkest-gray"
      >
        <Icon type="coin" class="text-xl" />
        <span>3 500</span>
      </span>
    </div>
    <div class="flex top">
      <div class="logo">
        <router-link :to="{ name: 'home' }" class="h-full flex">
          <img src="@/assets/img/logo.png" class="h-full" />
        </router-link>
      </div>
      <div class="container flex-grow gap-6 items-center flex">
        <router-link
          :to="{ name: 'catalog' }"
          class="btn text-darkest-gray gap-2 text-base rounded-sm font-semibold bg-yellow-light catalog h-full flex items-center"
        >
          <Icon type="list_search" class="text-2xl" />
          <span class="">Каталог</span>
        </router-link>
        <div
          class="search h-full flex flex-grow items-center rounded-sm relative"
        >
          <input
            type="search"
            :value="search"
            @input="onSearchChange"
            placeholder="Поиск по каталогу"
            class="h-full w-full"
          />
          <Icon type="search" class="search-icon absolute" />
          <Icon
            type="cancel"
            class="cancel-icon absolute point"
            :class="!search && 'opacity-0'"
            @click="clearSearch"
          />
        </div>
        <Links />
        <User />
      </div>
    </div>
    <div class="mobile flex gap-6 items-center">
      <router-link
        :to="{ name: 'catalog' }"
        class="btn text-darkest-gray gap-2 rounded-sm font-semibold bg-yellow-light catalog h-full flex items-center"
      >
        <Icon type="list_search" class="text-2xl" />
        <span class="text-base">Каталог</span>
      </router-link>
      <div
        class="search h-full flex flex-grow items-center rounded-sm relative"
      >
        <input
          type="search"
          :value="search"
          @input="onSearchChange"
          placeholder="Поиск по каталогу"
          class="h-full w-full"
        />
        <Icon type="search" class="search-icon absolute" />
        <Icon
          type="cancel"
          class="cancel-icon absolute point"
          :class="!search && 'opacity-0'"
          @click="clearSearch"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper-top {
  .top {
    padding: 12px 0;
    height: 80px;
    @media only screen and (max-width: 880px) {
      padding: 0;
    }
    @media only screen and (max-width: 1280px) {
      justify-content: space-between;
      height: auto;
    }
    .logo {
      padding: 4px 0;
      padding-left: 24px;
      width: 320px;
      @media only screen and (max-width: 880px) {
        width: auto;
        height: 40px;
        padding: 4px 0 4px 16px;
      }
    }
    .container {
      @media only screen and (max-width: 1280px) {
        flex-grow: 0;
      }
      @media only screen and (max-width: 880px) {
        display: none;
      }
      .catalog {
        @media only screen and (max-width: 1280px) {
          display: none;
        }
      }
      .search {
        @media only screen and (max-width: 1280px) {
          display: none;
        }
      }
    }
  }

  .mobile {
    margin: 0 24px;
    padding-bottom: 24px;
    height: 80px;
    display: none;

    @media only screen and (max-width: 1280px) {
      display: flex;
    }

    @media only screen and (max-width: 880px) {
      margin: 0 16px;
      height: 56px;
      padding-bottom: 16px;
      gap: 8px;
    }
    .catalog {
      @media only screen and (max-width: 880px) {
        width: 40px;
        padding: 8px;
      }
    }
  }

  .mobile-top {
    display: none;

    padding: 10px 16px;
    @media only screen and (max-width: 880px) {
      display: flex;
    }
    .coin{
      padding: 2px 10px 2px 2px;
    }
  }
}
.catalog {
  padding: 0 16px;
  @media only screen and (max-width: 880px) {
    .text-base {
      display: none;
    }
  }
}
.search {
  input {
    padding: 0 24px 0 48px;
    @media only screen and (max-width: 880px) {
      padding: 0 24px 0 36px;
    }
  }
  .search-icon {
    left: 16px;
    font-size: 24px;
    color: #71717A;
  }
  .cancel-icon {
    right: 8px;
  }
}
</style>
