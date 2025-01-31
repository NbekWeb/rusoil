<script setup>
import { RouterLink } from "vue-router";
import Icon from "../icons/Icon.vue";

const links = [
  {
    name: "Заказы",
    to: "orders",
    icon: "box",
  },
  {
    name: "Избранное",
    to: "favorite",
    icon: "heart",
  },
  {
    name: "Уведомления",
    to: "msg",
    icon: "ring",
  },
  {
    name: "Заказы",
    to: "basket",
    icon: "order",
  },
];
</script>
<template>
  <div class="h-full flex gap-0 items-center text-xs text-white">
    <router-link to="/cash" class="link flex-col gap-0 flex items-center">
      <span
        class="flex font-bold coin gap-1 items-center rounded-sm bg-yellow-light text-darkest-gray"
      >
        <Icon type="coin" class="text-sm" />
        <span>3 500</span>
      </span>
      <span> Бонусы </span>
    </router-link>
    <template v-for="(link, i) of links" :key="i">
      <router-link
        :to="{ name: link?.to }"
        class="link flex-col gap-0 flex items-center relative"
      >
        <span>
          <span
            class="prefix text-sm flex items-center justify-center absolute rounded-full"
            v-if="link.to == 'basket'"
          >
            25
          </span>
          <Icon :type="link?.icon" class="text-2xl text-gray-light" />
        </span>
        <span class="truncate px-2 flex"> {{ link?.name }} </span>
      </router-link>
    </template>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

.link {
  width: 100px;
  padding: 6px 0;

  .coin {
    padding: 2px 6px;
  }
  color: $white;
  &:hover {
    span {
      transition: all ease 0.3s;
      color: $white;
    }
  }
  .prefix {
    background: $color-red;
    width: 20px;
    height: 20px;
    top: 0;
    right: 21px;
  }
}
</style>
