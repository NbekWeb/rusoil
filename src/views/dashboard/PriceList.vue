<script setup>
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";

const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: "Прайс-лист",
    to: "priceList",
  },
];
</script>
<template>
  <div class="text-darkest-gray">
    <div class="px-8 py-6 border-b border-off-white">
      <link-items :links="links" />
      <h2 class="text-2xl pt-5 pb-6">Прайс-лист</h2>
    </div>
    <div class="p-8 border-b border-off-white">
      <div class="grid-2 gap-6">
        <div
          class="flex grid-item items-center rounded-sm p-10 justify-center flex-col gap-6"
        >
          <Icon type="download-file" class="large-icon" />
          <div class="flex flex-col gap-3 items-center">
            <span class="font-semibold text-xl">Скачайте прайс-лист</span>
            <span class="opacity-50"
              >Укажите кол-во нужных товаров и загрузите в соседнее окно</span
            >
          </div>
          <div
            class="point bg-yellow-light rounded-sm px-12 py-3 flex items-center gap-2"
          >
            <Icon type="upload" />
            <span>Скачать</span>
          </div>
        </div>
        <div
          class="flex grid-item items-center rounded-sm p-10 justify-center flex-col gap-6"
        >
          <Icon type="upload-file" class="large-icon" />
          <div class="flex flex-col gap-3 items-center">
            <span class="font-semibold text-xl">Перетащите файл с прайсом</span>
            <span class="opacity-50"
              >Загрузите заполненный файл для автоматического создания
              заказа</span
            >
          </div>
          <div
            class="point bg-yellow-light rounded-sm px-12 py-3 flex items-center gap-2"
          >
            <Icon type="files" />
            <span>Выбрать файл</span>
          </div>
        </div>
      </div>
    </div>
    <div class="px-8 py-6">
      <h2 class="text-2xl pb-6">Прайс-лист</h2>
      <div class="grid-4 gap-6 pb-10">
        <div class="rounded-sm flex flex-col gap-6">
          <div class="flex justify-between items-center">
            <div
              class="w-12 h-12 flex items-center justify-center text-white bg-darkest-gray rounded-full"
            >
              01
            </div>
            <Icon type="arrow" class="text-2xl text-gray-29" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="font-semibold"> Нажмите на кнопку «Скачать» </span>
            <span class="text-gray-29">
              В скачанном файле отражено товарное наличие и цены
            </span>
          </div>
        </div>
        <div class="rounded-sm flex flex-col gap-6">
          <div class="flex justify-between items-center">
            <div
              class="w-12 h-12 flex items-center justify-center text-white bg-darkest-gray rounded-full"
            >
              02
            </div>
            <Icon type="arrow" class="text-2xl text-gray-29" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="font-semibold"> Заполните столбец «кол-во» </span>
            <span class="text-gray-29">
              Заполняйте только у тех товаров, которые хотите заказать
            </span>
          </div>
        </div>
        <div class="rounded-sm flex flex-col gap-6">
          <div class="flex justify-between items-center">
            <div
              class="w-12 h-12 flex items-center justify-center text-white bg-darkest-gray rounded-full"
            >
              03
            </div>
            <Icon type="arrow" class="text-2xl text-gray-29" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="font-semibold">Нажмите на кнопку «Выбрать файл» </span>
            <span class="text-gray-29">
              Чтобы загрузить заполненный прайс для автоматического создания
              заказа <span class="text-red">*</span></span
            >
          </div>
        </div>
        <div class="rounded-sm flex flex-col gap-6">
          <div class="flex justify-between items-center">
            <div
              class="w-12 h-12 flex items-center justify-center text-white bg-darkest-gray rounded-full"
            >
              04
            </div>
            <Icon type="check" class="text-2xl text-green-500" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="font-semibold"> Оформите заказ </span>
            <span class="text-gray-29">
              Вам потребуется указать адрес доставки или выбрать пункт
              самовывоза
            </span>
          </div>
        </div>
      </div>
      <span>
        <span class="text-red pb-10"> * </span> Или отправьте заполненный файл
        вашему персональному менеджеру для оформления заказа</span
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  .grid-item {
    background: $color-gray-50;
    .large-icon {
      font-size: 48px;
      color: rgba($color: $color-darkest-gray, $alpha: 0.1);
    }
   
    .bg-yellow-light {
      &:hover {
        background: rgba($color: $color-yellow-light, $alpha: 0.7);
      }
    }
  }
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
</style>
