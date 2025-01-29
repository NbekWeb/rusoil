<script setup>
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";
import Checkbox from "@/components/usefull/Checkbox.vue";
const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: "Рекламации",
    to: "complaints",
  },
];
</script>
<template>
  <div class="text-darkest-gray text-base">
    <div class="px-8 py-6 border-b border-off-white">
      <link-items :links="links" />
      <h2 class="text-2xl pt-5 pb-6">Мои рекламации</h2>
    </div>
    <div class="p-8">
      <div class="flex pb-8">
        <div class="flex px-4 py-3 rounded-sm point btn">
          Создать рекламацию
        </div>
      </div>
      <div class="grid-4 gap-6 items-end">
        <div class="flex gap-2 flex-col">
          <span class="sm-hidden">Период</span>
          <div
            class="point border rounded-sm px-4 py-3 inp flex justify-between items-center"
          >
            <span c> Год </span>
            <Icon type="chevron-left" class="-rotate-90 text-xl" />
          </div>
        </div>
        <div class="flex gap-2 flex-col">
          <span class="sm-hidden">Статус</span>
          <div
            class="point border rounded-sm px-4 py-3 inp flex justify-between items-center"
          >
            <span> Все </span>
            <Icon type="chevron-left" class="-rotate-90 text-xl" />
          </div>
        </div>
        <div class="flex col-2 items-center rounded-sm relative">
          <input
            type="search"
            placeholder="Поиск по корзине"
            class="px-4 py-3 border inp h-full w-full pl-13"
          />
          <Icon
            type="search"
            class="search-icon absolute left-4 text-gray-6b text-2xl"
          />
          <!-- <Icon type="cancel" class="cancel-icon absolute point" /> -->
        </div>
      </div>
      <div class="mt-6 text-sm lg-hidden">
        <div
          class="grid-2 justify-between items-center border-b border-off-white pb-3"
        >
          <div class="grid-2">
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >Претензия №123-456-564 от 14 окт 2024</span
              >
              <span class="opacity-50">Количественные расхождения</span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-underline"
                >Заказ №50008844-0156 от 13 авг 2024</span
              >
              <span class="opacity-50">10 позиций </span>
            </div>
          </div>
          <div class="grid-3">
            <div class="flex flex-col gap-1">
              <span class="flex gap-2 items-center">
                <Icon type="msg" class="text-2xl" />
                <span> Чат </span>
              </span>
              <span class="opacity-50"> 1 новое сообщение </span>
            </div>
            <div class="flex justify-center">
              <div
                class="warn flex gap-1 items-center text-yellow-700 py-1 px-3 rounded-sm"
              >
                НА СОГЛАСОВАНИИ
                <Icon type="t-mark" class="text-2xl" />
              </div>
            </div>
            <div class="flex justify-end gap-2 items-center">
              <icon type="star" class="text-2xl opacity-50" />
              <span>Оценить</span>
            </div>
          </div>
        </div>
        <div
          class="grid-2 justify-between items-center border-b border-off-white pb-3"
        >
          <div class="grid-2">
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >Претензия №123-456-564 от 14 окт 2024</span
              >
              <span class="opacity-50">Количественные расхождения</span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-underline"
                >Заказ №50008844-0156 от 13 авг 2024</span
              >
              <span class="opacity-50">10 позиций </span>
            </div>
          </div>
          <div class="grid-3">
            <div class="flex flex-col gap-1">
              <span class="flex gap-2 items-center">
                <Icon type="msg" class="text-2xl" />
                <span> Чат </span>
              </span>
              <span class="opacity-50"> 1 новое сообщение </span>
            </div>
            <div class="flex justify-center">
              <div
                class="warn flex gap-1 items-center text-yellow-700 py-1 px-3 rounded-sm"
              >
                ПРИНЯТО В РАБОТУ
                <Icon type="t-mark" class="text-2xl" />
              </div>
            </div>
            <div class="flex justify-end gap-2 items-center">
              <icon type="star" class="text-2xl opacity-50" />
              <span>Оценить</span>
            </div>
          </div>
        </div>
        <div
          class="grid-2 justify-between items-center border-b border-off-white pb-3"
        >
          <div class="grid-2">
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >Претензия №123-456-564 от 14 окт 2024</span
              >
              <span class="opacity-50">Количественные расхождения</span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-underline"
                >Заказ №50008844-0156 от 13 авг 2024</span
              >
              <span class="opacity-50">10 позиций </span>
            </div>
          </div>
          <div class="grid-3">
            <div class="flex flex-col gap-1">
              <span class="flex gap-2 items-center">
                <Icon type="msg" class="text-2xl" />
                <span> Чат </span>
              </span>
              <span class="opacity-50"> 1 новое сообщение </span>
            </div>
            <div class="flex justify-center">
              <div
                class="warn flex gap-1 items-center text-yellow-700 py-1 px-3 rounded-sm"
              >
                ПРИНЯТО РЕШЕНИЕ
                <Icon type="t-mark" class="text-2xl" />
              </div>
            </div>
            <div class="flex justify-end gap-2 items-center">
              <icon type="star" class="text-2xl opacity-50" />
              <span>Оценить</span>
            </div>
          </div>
        </div>
        <div
          class="grid-2 justify-between items-center border-b border-off-white pb-3"
        >
          <div class="grid-2">
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >Претензия №123-456-564 от 14 окт 2024</span
              >
              <span class="opacity-50">Количественные расхождения</span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-underline"
                >Заказ №50008844-0156 от 13 авг 2024</span
              >
              <span class="opacity-50">10 позиций </span>
            </div>
          </div>
          <div class="grid-3">
            <div class="flex flex-col gap-1">
              <span class="flex gap-2 items-center">
                <Icon type="msg" class="text-2xl" />
                <span> Чат </span>
              </span>
              <span class="opacity-50"> 1 новое сообщение </span>
            </div>
            <div class="flex justify-center">
              <div
                class="success flex gap-1 items-center text-yellow-700 py-1 px-3 rounded-sm"
              >
                ИСПОЛНЕНО
                <Icon type="t-mark" class="text-2xl" />
              </div>
            </div>
            <div class="flex justify-end gap-2 items-center">
              <icon type="star" class="text-2xl opacity-50" />
              <span>Оценить</span>
            </div>
          </div>
        </div>
        <div
          class="grid-2 justify-between items-center border-b border-off-white pb-3"
        >
          <div class="grid-2">
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >Претензия №123-456-564 от 14 окт 2024</span
              >
              <span class="opacity-50">Количественные расхождения</span>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-underline"
                >Заказ №50008844-0156 от 13 авг 2024</span
              >
              <span class="opacity-50">10 позиций </span>
            </div>
          </div>
          <div class="grid-3">
            <div class="flex flex-col gap-1">
              <span class="flex gap-2 items-center">
                <Icon type="msg" class="text-2xl" />
                <span> Чат </span>
              </span>
              <span class="opacity-50"> 1 новое сообщение </span>
            </div>
            <div class="flex justify-center">
              <div
                class="error flex gap-1 items-center text-yellow-700 py-1 px-3 rounded-sm"
              >
                ОТКЛОНЕНО
                <Icon type="t-mark" class="text-2xl" />
              </div>
            </div>
            <div class="flex justify-end gap-2 items-center">
              <icon type="star" class="text-2xl opacity-50" />
              <span>Оценить</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-2 mt-5 gap-2 text-xs">
        <div class="p-4 rounded-sm border-gray" v-for="i in 6" :key="i">
          <span class="font-semibold"
            >Претензия №123-456-564 от 14 окт 2024</span
          >
          <span class="flex mt-1 text-gray-500 text-sm">
            Количественные расхождения
          </span>

          <div
            class="warn max-w-max flex gap-1 items-center text-yellow-700 py-05 px-2 rounded-sm mt-5"
          >
            НА СОГЛАСОВАНИИ
            <Icon type="t-mark" class="text-2xl" />
          </div>
          <span class="underline mt-4 flex"
            >Заказ №50008844-0156 от 13 авг 2024</span
          >
          <span class="text-gray-500 text-sm flex mt-1">10 позиций</span>

          <div class="flex mt-4 text-gray-500 gap-6 items-center">
            <span class="flex gap-2 items-center">
              <Icon type="msg" class="text-2xl" />
              <span> Чат </span>
            </span>
            <div class="flex  gap-2 items-center">
              <icon type="star" class="text-2xl opacity-50" />
              <span>Оценить</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

.btn {
  background: rgba($color: $color-yellow-light, $alpha: 1);
  &:hover {
    background: rgba($color: $color-yellow-light, $alpha: 0.8);
  }
}

@media only screen and (max-width: 1280px) {
  .pb-6 {
    padding-bottom: 0;
  }
  .col-2 {
    grid-column: span 2;
  }
}

.warn {
  background: #fef9c3;
}
.error {
  color: #7f1d1db2;
  background: #fee2e2;
}
.success {
  color: #064e3bb2;
  background: #dcfce7;
}

@media only screen and (max-width: 1024px) {
  .lg-hidden {
    display: none;
  }
}
@media only screen and (max-width: 640px) {
  .py-6,.p-8{
    padding: 16px;
  }
  .pb-8{
    padding-bottom: 12px;
  }
  .pt-5{
    padding-top: 8px;
  }
  .sm-hidden {
    display: none;
  }
  .gap-6 {
    gap: 8px;
  }
  .grid-4 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .col-2 {
    grid-column: span 3;
  }
}
.border-gray {
  border: 1px solid $color-gray-lighter;
}
.py-05 {
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
