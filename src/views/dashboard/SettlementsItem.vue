<script setup>
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";
import Checkbox from "@/components/usefull/Checkbox.vue";
import itemCard from "@/components/settlements/item.vue";

const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: "Взаиморасчёты",
    to: "settlements",
  },
  {
    name: "№12041",
    to: "settlementsItem",
  },
];

const item = {
  name: "5/40 Visco 5000 ВР 208л. синт. API SN/CF Масло моторное",
  num: "15",
  price: "2 000 ₽",
  summa: "30 000 ₽",
};

const heads = ["Название", "Кол-во", "Цена за ед.", "Сумма"];
</script>
<template>
  <div class="text-darkest-gray text-base">
    <div class="px-8 py-6 border-b border-off-white">
      <link-items :links="links" />
      <h2 class="text-2xl pt-5 pb-6">Накладная №12041 от 10 сен 2024</h2>
    </div>
    <div class="px-8 border-b border-off-white">
      <div class="flex items-center justify-between sm-col">
        <div class="flex gap-6">
          <div class="flex gap-2 items-center py-10">
            <Icon type="t-mark" class="text-red text-2xl" />
            <span> Заказ не оплачен</span>
          </div>
          <div class="flex gap-2 items-center py-10">
            <Icon type="bag" class="opacity-20 text-2xl" />
            <span> Всего позиций: 8</span>
          </div>
          <div class="flex gap-2 items-center py-10">
            <Icon type="truck" class="opacity-20 text-2xl" />
            <span> Scania, А867ЕЕ</span>
          </div>
          <div class="flex gap-2 items-center py-10">
            <Icon type="phone" class="opacity-20 text-2xl" />
            <span> +7 (900) 321-01-23</span>
          </div>
        </div>
        <div
          class="btn rounded-sm h-12 bg-yellow-light flex items-center px-6 font-semibold"
        >
          Оплатить
        </div>
      </div>
      <div class="flex items-center gap-3 xs-grid">
        <div
          class="search mx-6 h-12 flex flex-grow items-center rounded-sm relative"
        >
          <input
            type="search"
            placeholder="Поиск "
            class="h-full w-full pl-13"
          />
          <Icon
            type="search"
            class="search-icon absolute left-4 text-gray-6b text-2xl"
          />
          <!-- <Icon type="cancel" class="cancel-icon absolute point" /> -->
        </div>
        <div class="flex items-center justify-between">
          <span class="flex items-center gap-2 lg-show text-sm">
            <Checkbox :check="true" />

            Выбрать все
          </span>
          <div
            class="point flex gap-1 items-center py-3 px-4 inp border rounded-sm"
          >
            Действия
            <Icon type="menu" class="text-2xl" />
          </div>
        </div>
      </div>
      <table class="mt-8 lg-hidden rounded-sm border border-off-white w-full">
        <tr class="flex bg-gray-50 rounded-t-sm">
          <th
            v-for="(item, i) of heads"
            :key="i"
            :class="[
              'py-6',
              i == 0
                ? 'flex-grow px-3 text-start'
                : 'pr-3  min-w-50 flex justify-center',
            ]"
          >
            <span class="flex items-center gap-4">
              <Checkbox :check="true" v-if="i == 0" />

              {{ item }}
            </span>
          </th>
        </tr>
        <tr
          :class="['flex', i == 12 && 'rounded-b-sm']"
          v-for="i of 12"
          :key="i"
        >
          <td :class="['py-3 px-3 flex-grow']">
            <div class="flex items-center gap-4">
              <Checkbox :check="true" />
              <div class="flex items-center gap-3">
                <img src="@/assets/img/moto.png" class="w-12" />
                <div class="flex flex-col gap-1 text-xs">
                  <span class="truncate">
                    {{ item.name }}
                  </span>
                  <span class="opacity-50">Артикул 19435</span>
                </div>
              </div>
            </div>
          </td>
          <td class="pr-3 py-3 min-w-50 flex justify-center">
            {{ item.num }}
          </td>
          <td class="pr-3 py-3 min-w-50 flex justify-center">
            {{ item.price }}
          </td>
          <td class="pr-3 py-3 min-w-50 flex justify-center">
            {{ item.summa }}
          </td>
        </tr>
      </table>
      <div class="lg-grid bor-y grid-1 mt-3">
        <item-card v-for="i in 4" :key="i" />
      </div>
      <div class="p-8 flex items-center justify-between">
        <div class="flex flex-col gap-1">
          <span class="font-semibold">Адрес доставки</span>

          <span class="opacity-50"
            >Тюмень 625019 Тюмень, ул. Республики 256/1
          </span>
        </div>
        <div class="flex flex-col gap-1 justify-end">
           <span class="font-semibold"> Итого</span>
          <span class="opacity-50">240 000 ₽ Вес по накладной 124.56 кг </span>
        </div>
      </div>
      <div class="px-8 pb-8 flex justify-end items-center gap-2">
        <div
          class="inp border rounded-sm point flex gap-2 items-center py-3 px-4"
        >
          <Icon type="t-download" class="text-2xl opacity-50" />
          Скачать .xlsx
        </div>
        <div
          class="inp border rounded-sm point flex gap-2 items-center py-3 px-4"
        >
          <Icon type="print" class="text-2xl opacity-50" />
          Печать
        </div>
        <div
          class="inp border rounded-sm point flex gap-2 items-center py-3 px-4"
        >
          <Icon type="return" class="text-2xl opacity-50" />
          Повторить заказ
        </div>
        <div
          class="inp border rounded-sm point flex gap-2 items-center py-3 px-4"
        >
          <Icon type="t-download" class="text-2xl opacity-50" />
          УПД
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

.lg-show,
.lg-grid {
  display: none;
}
.bor-black-8 {
  border-color: rgba($color: $black, $alpha: 0.08);
}
.bg-red-50 {
  background: #ffeeeb;
  border-color: $color-red;
}
.rounded-t-sm {
  border-radius: 12px 12px 0 0;
}
.rounded-b-sm {
  border-radius: 0 0 12px 12px;
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

th {
  font-weight: 400;
}

.bg-red-8 {
  background: rgba($color: $color-red, $alpha: 0.08);
}
.min-w-50 {
  min-width: 200px;
}

@media only screen and (max-width: 640px) {
  .p-8 {
    flex-direction: column;
    align-items: start;
  }
  .px-8 {
    padding-right: 16px;
    padding-left: 16px;
  }
  .py-6 {
    padding: 16px;
  }
  .pt-5 {
    padding-top: 8px;
  }
  .text-2xl {
    font-size: 20px;
    line-height: 24px;
  }
  .sm-col {
    flex-direction: column;
    margin-bottom: 12px;
    .gap-6 {
      width: 100%;
    }
    .btn {
      width: 100%;
      justify-content: center;
    }
  }
}
@media only screen and (max-width: 768px) {
  .lg-show {
    display: flex;
  }
  .lg-grid {
    display: grid;
  }
  .lg-hidden {
    display: none;
  }
  .xs-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .py-10 {
    padding-bottom: 0px;
    padding-top: 0px;
  }
  .p-8 {
    padding: 10px 0;
  }
  .mx-6 {
    margin: 0;
  }
  .gap-6 {
    margin: 10px 0;
    gap: 12px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .pb-8 {
    padding: 0 0 12px 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media only screen and (max-width: 1280px) {
  .pt-5.pb-6 {
    padding-bottom: 0;
  }
}
@media only screen and (max-width: 480px) {
  .gap-6 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .pb-8 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

.bor-y {
  border-top: 1px solid $color-gray-lighter;
  border-bottom: 1px solid $color-gray-lighter;
}
</style>
