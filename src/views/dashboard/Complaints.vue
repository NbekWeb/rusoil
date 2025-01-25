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
          <span>Период</span>
          <div
            class="point border rounded-sm px-4 py-3 inp flex justify-between items-center"
          >
            <span> Год </span>
            <Icon type="chevron-left" class="-rotate-90 text-xl" />
          </div>
        </div>
        <div class="flex gap-2 flex-col">
          <span>Статус</span>
          <div
            class="point border rounded-sm px-4 py-3 inp flex justify-between items-center"
          >
            <span> Все </span>
            <Icon type="chevron-left" class="-rotate-90 text-xl" />
          </div>
        </div>
        <div class="flex items-center rounded-sm relative">
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
      <div class="mt-6 text-sm">
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
</style>
