<script setup>
import news1 from "@/assets/img/news1.jpg";
import news2 from "@/assets/img/news2.jpg";
import news3 from "@/assets/img/news3.jpg";
import news4 from "@/assets/img/news4.png";
import news5 from "@/assets/img/news5.png";

const news = [
  {
    name: "Обучение от ZIC в Тюмени",
    img: news1,
    date: "2 апреля 2024",
  },
  {
    name: "Открытие второго центра в Екатеринбурге!",
    img: news2,
    date: "2 апреля 2024",
  },
  {
    name: "Новинка! Масло Teboil в магазинах Масломаrt",
    img: news3,
    date: "2 апреля 2024",
  },
  {
    name: "Итоги сезона Уральской лиги дрифта",
    img: news4,
    date: "2 апреля 2024",
  },
  {
    name: "Итоги сезона Уральской лиги дрифта",
    img: news5,
    date: "2 апреля 2024",
  },
];
</script>

<template>
  <div class="text-darkest-gray text-base font-bold px-8 pt-6 pb-8">
    <h2 class="text-2xl pb-6">Новости</h2>
    <div class="catalog gap-6">
      <template v-for="(item, i) of news" :key="i">
        <div class="flex flex-col gap-3 point rounded-sm item">
          <img :src="item.img" class="w-full rounded-sm" />
          <span class="pb-3 text-sm text-gray-light">{{ item?.date }}</span>
          <span class="pb-9 title">{{ item?.name }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.catalog {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .item {
    img {
      aspect-ratio: 1 / 1;
    }
    transition: 0.3s ease;
    &:hover {
      .title {
        color: $color-yellow-link;
      }
    }
  }
}

@media only screen and (max-width: 640px) {
  .text-2xl {
    font-size: 20px;
    line-height: 24px;
  }
  .pb-6,
  .pb-8 {
    padding-bottom: 16px;
  }
  .pt-6 {
    padding-top: 16px;
  }
  .gap-6 {
    gap: 16px;
  }
  .gap-3 {
    gap: 6px;
  }
  .pb-9 {
    padding-bottom: 16px;
  }
  .text-base {
    font-size: 14px;
    line-height: 16px;
  }
  .pb-3{
    padding-bottom: 0px;
  }
}
</style>
