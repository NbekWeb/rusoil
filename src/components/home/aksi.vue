<script setup>
import aksi1 from "@/assets/img/aksi1.png";
import aksi2 from "@/assets/img/aksi2.png";
import aksi3 from "@/assets/img/aksi3.png";
import aksi4 from "@/assets/img/aksi4.png";

const aksi = [
  {
    name: "Розыгрыш Apple Watch",
    img: aksi1,
  },
  {
    name: "Скидка 10% в день заключения договора",
    img: aksi2,
  },
  {
    name: "Лукойл Genesis 1 литр в подарок за покупку 4-х",
    img: aksi3,
  },
  {
    name: "LAVR дарит автомобиль",
    img: aksi4,
  },
];
</script>

<template>
  <div
    class="text-darkest-gray text-base font-bold px-8 pt-6 pb-8 border-b border-off-white"
  >
    <h2 class="text-2xl pb-6">Акции</h2>
    <div class="catalog gap-6">
      <template v-for="(item, i) of aksi" :key="i">
        <div class="flex flex-col gap-3 point rounded-sm item">
          <img :src="item.img" class="w-full rounded-sm" />
          <span class="pb-9">{{ item?.name }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";

.catalog {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .item {
    img {
      aspect-ratio: 1 / 1;
    }
    transition: 0.3s ease;
    &:hover {
      color: $color-yellow-link;
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
  .gap-6 {
    gap: 16px;
  }
  .text-base {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
