<script setup>
import img1 from "@/assets/img/01.png";
import img2 from "@/assets/img/02.png";
import img3 from "@/assets/img/03.png";
import img4 from "@/assets/img/04.png";
import img5 from "@/assets/img/05.png";
import img6 from "@/assets/img/06.png";
import img7 from "@/assets/img/07.png";
import img8 from "@/assets/img/08.png";
const catalogs = [
  {
    name: "Смазочные материалы",
    img: img1,
  },
  {
    name: "Технические жидкости",
    img: img2,
  },
  {
    name: "Фильтры для авто",
    img: img3,
  },
  {
    name: "Автохимия",
    img: img4,
  },
  {
    name: "Аккумуляторы",
    img: img5,
  },
  {
    name: "Аксессуары",
    img: img6,
  },
  {
    name: "Шины и диски",
    img: img7,
  },
  {
    name: "Распродажа",
    img: img8,
  },
];
</script>

<template>
  <div
    class="text-darkest-gray text-base font-bold px-8 pt-6 pb-8 border-b border-off-white"
  >
    <h2 class="text-2xl pb-6">Каталог</h2>
    <div class="catalog gap-3">
      <template v-for="(item, i) of catalogs" :key="i">
        <div class="p-5 flex flex-col gap-11 point rounded-sm bg-gray-50">
          <img :src="item.img" class="w-12" />
          <span class="">{{ item?.name }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.catalog {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  @media only screen and (max-width: 1480px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .bg-gray-50 {
    transition: 0.3s ease;
    &:hover {
      background: $color-gray-lighter;
    }
  }
}
@media only screen and (max-width: 1280px) {
  .pb-6 {
    padding-bottom: 0;
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
  .p-5 {
    padding: 12px;
  }
  .w-12 {
    width: 36px;
  }
  .gap-11 {
    gap: 20px;
  }
  .text-base {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
