<script setup>
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";
import pagination from "@/components/usefull/pagination.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: "Новости",
    to: "news",
  },
];

const goItem = () => {
  router.push({ name: "newsItem" });
};
</script>
<template>
  <div class="text-darkest-gray text-base gap-6">
    <div class="px-8 py-6 border-b border-off-white">
      <link-items :links="links" />
      <h2 class="text-2xl pt-5 pb-6 font-semibold">Новости</h2>
    </div>
    <div class="grid-4 gap-6 px-8">
      <div
        @click="goItem"
        class="item point flex flex-col gap-3"
        v-for="i of 16"
        :key="i"
      >
        <img src="@/assets/img/news1.jpg" class="rounded-sm w-full" />
        <div class="flex flex-col gap-2">
          <span class=""> 2 апреля 2024 </span>
          <span class="title font-semibold text-base">
            Обучение от ZIC в Тюмени
          </span>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between px-8 pt-15 pb-10">
      <div
        class="text-base point flex gap-2 items-center inp border rounded-sm px-4 py-3"
      >
        Показать ещё
        <icon type="chevron-left" class="-rotate-90 text-2xl" />
      </div>
      <pagination />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

.item {
  transition: 0.3s ease;
  img {
    object-fit: cover;
  }
  &:hover {
    .title {
      color: $color-yellow-link;
    }
  }
}


</style>
