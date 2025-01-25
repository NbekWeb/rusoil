<script setup>
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";
import pagination from "@/components/usefull/pagination.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const goItem = () => {
  router.push({ name: "settlementsItem" });
};

const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: "Взаиморасчёты",
    to: "settlements",
  },
];

const heads = [
  "Расчёт №",
  "Дата заключения",
  "Оплатить до",
  "Просрочен дней",
  "Сумма отгрузки",
  "Сумма оплаты",
];

const items = [
  {
    num: "№12039",
    date: "02 сен 2024",
    pay: "06 окт 2024",
    day: 4,
    sum: "50 000 ₽ ",
    payment: "50 000 ₽ ",
    icon: true,
  },
  {
    num: "№12039",
    date: "02 сен 2024",
    pay: "06 окт 2024",
    day: 4,
    sum: "50 000 ₽ ",
    payment: "50 000 ₽ ",
    icon: true,
  },
  {
    num: "№12039",
    date: "02 сен 2024",
    pay: "06 окт 2024",
    day: 0,
    sum: "50 000 ₽ ",
    payment: "50 000 ₽ ",
    icon: false,
  },
  {
    num: "№12039",
    date: "02 сен 2024",
    pay: "06 окт 2024",
    day: 0,
    sum: "50 000 ₽ ",
    payment: "50 000 ₽ ",
    icon: true,
  },
  {
    num: "№12039",
    date: "02 сен 2024",
    pay: "06 окт 2024",
    day: 0,
    sum: "50 000 ₽ ",
    payment: "50 000 ₽ ",
    icon: false,
  },
  {
    num: "№12039",
    date: "02 сен 2024",
    pay: "06 окт 2024",
    day: 0,
    sum: "50 000 ₽ ",
    payment: "50 000 ₽ ",
    icon: true,
  },
  {
    num: "№12039",
    date: "02 сен 2024",
    pay: "06 окт 2024",
    day: 0,
    sum: "50 000 ₽ ",
    payment: "50 000 ₽ ",
    icon: false,
  },
  {
    num: "№12039",
    date: "02 сен 2024",
    pay: "06 окт 2024",
    day: 0,
    sum: "50 000 ₽ ",
    payment: "50 000 ₽ ",
    icon: true,
  },
  {
    num: "№12039",
    date: "02 сен 2024",
    pay: "06 окт 2024",
    day: 0,
    sum: "50 000 ₽ ",
    payment: "50 000 ₽ ",
    icon: false,
  },
  {
    num: "№12039",
    date: "02 сен 2024",
    pay: "06 окт 2024",
    day: 0,
    sum: "50 000 ₽ ",
    payment: "50 000 ₽ ",
    icon: true,
  },
  {
    num: "№12039",
    date: "02 сен 2024",
    pay: "06 окт 2024",
    day: 0,
    sum: "50 000 ₽ ",
    payment: "50 000 ₽ ",
    icon: false,
  },
];
</script>
<template>
  <div class="text-darkest-gray text-base">
    <div class="px-8 py-6 border-b border-off-white">
      <link-items :links="links" />
      <h2 class="text-2xl pt-5 pb-6">Взаиморасчёты</h2>
    </div>
    <div>
      <div class="flex justify-between items-center p-8">
        <p class="text-xl font-semibold">
          Общая задолженность: <span class="text-red"> -416 348.15 ₽ </span>
        </p>
        <div class="flex gap-1 font-semibold">
          <div class="point py-3 px-4 inp border rounded-sm">
            Запросить акт сверки
          </div>
          <div class="point py-3 px-4 inp bg-yellow-light rounded-sm">
            Оплатить
          </div>
        </div>
      </div>
      <div class="grid-4 gap-6 px-8">
        <div
          class="border rounded-sm bor-black-8 bg-gray-50 p-4 flex flex-col gap-1"
        >
          <span class="font-semibold"> 0 ₽ </span>
          <span> ООО «ГК Русойл» № ГК-1/2018 </span>
        </div>
        <div class="border rounded-sm bg-red-50 p-4 flex flex-col gap-1">
          <span class="font-semibold text-red"> -416 348.15 ₽ </span>
          <span> ООО «ГК Русойл» № ГК-1/2018 </span>
        </div>
        <div
          class="border rounded-sm bor-black-8 bg-gray-50 p-4 flex flex-col gap-1"
        >
          <span class="font-semibold"> 0 ₽ </span>
          <span> ООО «ГК Русойл» № ГК-1/2018 </span>
        </div>
        <div
          class="border rounded-sm bor-black-8 bg-gray-50 p-4 flex flex-col gap-1"
        >
          <span class="font-semibold"> 0 ₽ </span>
          <span> ООО «ГК Русойл» № ГК-1/2018 </span>
        </div>
      </div>
      <div class="flex p-8 gap-6 border-b border-off-white">
        <div class="flex items-center gap-3">
          <div>
            <span class="opacity-50"> Ближайший платеж: </span>
            <span class="font-semibold">10 000 ₽ </span>
          </div>
          <Icon type="mark" class="text-xl opacity-40" />
        </div>
        <div>
          <span class="opacity-50"> Просроченный платеж: </span>
          <span class="font-semibold text-red">40 000 ₽ </span>
        </div>
        <Icon type="mark" class="text-xl opacity-40" />
      </div>
      <div class="px-8">
        <table class="w-full bor-black-8 border rounded-sm mb-10">
          <tr class="bg-gray-50 grid-6 gap-0 rounded-t-sm border-b bor-black-8">
            <th :key="i" class="" v-for="(item, i) of heads">
              <span
                class="flex opacity-50 text-base gap-1 items-center px-3 py-6"
              >
                {{ item }}
                <Icon type="arrows" class="text-2xl point" />
              </span>
            </th>
          </tr>
          <tr
            @click="goItem"
            :class="[
              'grid-6 gap-0 bor-black-8 w-full point',
              i == items.length - 1 ? 'rounded-b-sm' : 'border-b ',
              item.day > 0 && 'bg-red-8',
            ]"
            v-for="(item, i) of items"
            :key="i"
          >
            <td class="text-start p-3">
              {{ item.num }}
            </td>
            <td class="text-start p-3">
              {{ item.date }}
            </td>
            <td class="text-start p-3">
              {{ item.pay }}
            </td>
            <td class="text-start p-3">
              {{ item.day }}
            </td>
            <td class="text-start p-3">
              {{ item.sum }}
            </td>
            <td class="text-start p-3">
              <span class="flex w-full items-center justify-between">
                {{ item.payment }}
                <Icon
                  type="t-download"
                  class="text-xl point"
                  v-if="item.icon"
                />
              </span>
            </td>
          </tr>
        </table>
        <div class="flex items-center pb-10 w-full justify-between">
          <div class="py-3 point inp border rounded-sm px-5">Показать ещё</div>

          <pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

.bor-black-8 {
  border-color: rgba($color: $black, $alpha: 0.08);
}
.bg-red-50 {
  background: #ffeeeb;
  border-color: $color-red;
}


.grid-2 {
 .grid-item {
    background: $color-gray-50;
    .large-icon {
      font-size: 48px;
      color: rgba($color: $color-darkest-gray, $alpha: 0.1);
    }
  }
}

.bg-yellow-light {
  &:hover {
    background: rgba($color: $color-yellow-light, $alpha: 0.7);
  }
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

th {
  font-weight: 400;
}

.bg-red-8 {
  background: rgba($color: $color-red, $alpha: 0.08);
}
@media only screen and (max-width: 1280px) {
  .pt-5.pb-6 {
    padding-bottom: 0;
  }
}
</style>
