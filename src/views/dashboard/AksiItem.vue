<script setup>
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: " Акции",
    to: "aksi",
  },
  {
    name: " Акция",
    to: "aksiItem",
  },
];

const goBack = () => {
  router.push({ name: "news" });
};
</script>
<template>
  <div class="text-darkest-gray text-base gap-6">
    <div class="px-8 py-6">
      <link-items :links="links" />
    </div>
    <div class="flex gap-6 px-8">
      <div class="flex-grow">
        <img src="@/assets/img/aksi1.png" class="rounded-sm w-full" />
      </div>
      <div class="min-w-500 rounded-sm flex bg-gray-50">
        <div class="h-full w-full flex items-stretch">
          <div class="h-auto w-full flex flex-col">
            <div class="text-center text-xs rounded-sm warn w-full">
              АКЦИЯ ДЕЙСТВУЕТ ДО 31.12.2024
            </div>
            <div
              class="flex gap-2 flex-col flex-grow justify-senter items-center"
            >
              <img
                src="@/assets/img/w.png"
                class="w-20 h-20 object-cover mt-2 rounded-full"
              />
              <span class="text-xl text-center font-semibold flex"
                >Мельникова Ирина Владимировна</span
              >
              <span class="opacity-50">Ваш персональный менеджер</span>
              <p class="text-center px-20">
                Если у вас возникли вопросы, вам непонятны условия или не можете
                воспользоваться акцией — свяжитесь со мной для консультации
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="opacity-50">Опубликовано: 2 апреля 2024 </span>
    <div class="mt-20 mb-5">
      <h2 class="text-2xl py-5 px-8 font-semibold">Новости</h2>

      <div class="grid-5 gap-6 px-8">
        <div class="item point flex flex-col gap-3" v-for="i of 5" :key="i">
          <img src="@/assets/img/news1.jpg" class="rounded-sm w-full" />
          <div class="flex flex-col gap-2">
            <span class=""> 2 апреля 2024 </span>
            <span class="title font-semibold text-base">
              Обучение от ZIC в Тюмени
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

.warn {
  color: #723711;
  background: #fff5c2;
  padding: 6px 0;
}

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
