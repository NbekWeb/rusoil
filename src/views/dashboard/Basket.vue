<script setup>
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";
import Checkbox from "@/components/usefull/Checkbox.vue";
import { ref } from "vue";
import ProductItem from "@/components/usefull/ProductItem.vue";
import Rekomend from "@/components/usefull/Rekomend.vue";
const selected = ref(1);

const changeSelect = (i) => {
  selected.value = i;
};
const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: "Корзина",
    to: "basket",
  },
];
</script>
<template>
  <div class="text-darkest-gray bg-gray-f7">
    <div class="px-8 py-6 border-b border-off-white">
      <link-items :links="links" />
      <h2 class="text-2xl pt-5 font-semibold pb-6">Корзина</h2>
    </div>
    <div class="flex gap-6 p-8">
      <div class="flex flex-col gap-8 flex-grow">
        <div class="grid-4 gap-6 text-sm font-semibold text-gray-6b">
          <div class="rounded-sm p-6 flex bg-white items-center flex-col gap-3">
            <span>Новая корзина</span>
            <div
              class="point bg-yellow-light text-darkest-gray text-2xl rounded-sm p-3 flex items-center gap-2"
            >
              <Icon type="r-plus" />
            </div>
          </div>
          <div class="rounded-sm p-6 flex bg-white items-start flex-col gap-3">
            <span>Моторные масла</span>
            <div class="grid-4 gap-1 p-1 bg-gray-f7 h-12">
              <div v-for="i of 3" :key="i" class="point rounded-sm bg-white">
                <img src="@/assets/img/moto.png" class="w-10 rounded-sm" />
              </div>
              <span class="text-sm flex items-center justify-center">
                20+
              </span>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-sm">
          <h2 class="text-xl font-semibold p-6">Товары</h2>

          <div
            class="search mx-6 h-12 flex flex-grow items-center rounded-sm relative"
          >
            <input
              type="search"
              placeholder="Поиск по корзине"
              class="bg-gray-f7 border-none h-full w-full pl-13"
            />
            <Icon
              type="search"
              class="search-icon absolute left-4 text-gray-6b text-2xl"
            />
            <!-- <Icon type="cancel" class="cancel-icon absolute point" /> -->
          </div>
          <div class="flex flex-col">
            <div class="flex justify-between p-6 border-b border-off-white">
              <div class="flex gap-6 items-center">
                <Checkbox :check="true" />
                <span>Выбрать все</span>
              </div>
              <div class="flex gap-3 items-center">
                <span>Действия с выбранными</span>
                <Icon type="menu" />
              </div>
            </div>
            <div class="p-3 border-b border-off-white">
              <product-item :check="true" v-for="i of 4" :key="i" />
            </div>
            <div class="p-6 flex">
              <div class="point text-base px-6 py-3 btn rounded-sm">
                Очистить корзину
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-sm">
          <h2 class="text-xl font-semibold p-6">Способ получения</h2>
          <div class="mx-6 p-05 grid-2 bg-gray-f1 rounded-sm">
            <div
              @click="changeSelect(1)"
              :class="[
                'flex point gap-3 p-3 items-center justify-center rounded-sm',
                selected == 1 && 'bg-white',
              ]"
            >
              <span
                v-if="selected == 1"
                class="flex min-w-5 h-5 bor-yellow-light rounded-full flex items-center justify-center"
              >
                <span
                  class="flex min-w-3 h-3 bg-yellow-light rounded-full flex"
                >
                </span>
              </span>
              <span
                v-else
                class="flex min-w-5 h-5 bor-black rounded-full flex items-center justify-center"
              ></span>
              <span class="text-base"> Доставка </span>
            </div>
            <div
              @click="changeSelect(2)"
              :class="[
                'flex point gap-3 p-3 items-center justify-center rounded-sm',
                selected == 2 && 'bg-white',
              ]"
            >
              <span
                v-if="selected == 2"
                class="flex min-w-5 h-5 bor-yellow-light rounded-full flex items-center justify-center"
              >
                <span
                  class="flex min-w-3 h-3 bg-yellow-light rounded-full flex"
                >
                </span>
              </span>
              <span
                v-else
                class="flex min-w-5 h-5 bor-black rounded-full flex items-center justify-center"
              ></span>
              <span class="text-base"> Самовывоз </span>
            </div>
          </div>
          <div class="flex flex-col gap-3 border-b border-off-white p-6">
            <div class="flex justify-between items-center">
              <div class="flex flex-col">
                <span>Адрес доставки</span>
                <span class="text-black opacity-50"
                  >Тюмень, ул. Тюменская 124/5, офис 78
                </span>
              </div>
              <div
                class="w-12 h-12 flex bg-gray-f1 items-center justify-center text-2xl rounded-sm"
              >
                <Icon type="pen" />
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex flex-col">
                <span>Юридическое лицо</span>
                <span class="text-black opacity-50">ООО «ТРЕЙД СЕРВИС» </span>
              </div>
              <div
                class="w-12 h-12 flex bg-gray-f1 items-center justify-center text-2xl rounded-sm"
              >
                <Icon type="pen" />
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-xl font-semibold p-6">Комментарий к заказу</h2>

            <div class="px-6 mt-3 pb-6">
              <textarea
                :rows="3"
                class="inp rounded-sm p-4 w-full"
                placeholder="Введите текст
    
    "
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6 right-items text-xs">
        <div class="rounded-sm p-6 bg-white flex gap-4 flex-col items-center">
          <span class="font-semibold text-base">Информация о заказе</span>
          <div class="flex justify-between w-full">
            <span class="opacity-50">Всего товаров </span>
            <span> 70 </span>
          </div>
          <div class="flex justify-between w-full">
            <span class="opacity-50">Скидка </span>
            <span> -4 000 ₽ </span>
          </div>
          <div class="flex justify-between w-full text-2xl font-semibold">
            <span class="">Итого </span>
            <span>355 000 ₽ </span>
          </div>
          <div class="flex justify-between w-full">
            <span class="opacity-50">Начислим за этот заказ </span>
            <div class="coin flex items-center rounded-sm">
              <Icon type="coin" />
              <span>120</span>
            </div>
          </div>
          <div
            class="point btn-yellow w-full py-4 flex items-center justify-center rounded-sm text-base font-semibold"
          >
            Оформить заказ
          </div>
          <div class="flex justify-between w-full">
            <span class="opacity-50">Предполагаемая дата доставки </span>
            <span>26 сентября </span>
          </div>
        </div>
        <div
          class="rounded-sm p-6 bg-white flex gap-4 flex-col items-center text-base"
        >
          <img
            class="w-16 h-16 rounded-full object-cover"
            src="@/assets/img/w.png"
          />
          <p class="font-semibold">Менеджер Евгения</p>
          <span class="text-center">
            Уважаемый партнёр! Если вы не нашли нужный товар в каталоге,
            то свяжитесь с нами. Мы предоставим индивидуальный сервис по поиску,
            закупу и доставке товара.
          </span>
          <div class="btn point py-3 px-6 rounded-sm">Связаться</div>
        </div>
      </div>
    </div>
    <Rekomend />
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";
.border-off-white {
  border-color: $color-gray-eb;
}

.bor-black {
  border: 2px solid rgba($color: $black, $alpha: 0.2);
}

.btn {
  background: rgba($color: $color-yellow-light, $alpha: 0.2);
}

.btn-yellow {
  background: rgba($color: $color-yellow-light, $alpha: 1);
  &:hover {
    background: rgba($color: $color-yellow-light, $alpha: 0.8);
  }
}




.bg-yellow-light {
  &:hover {
    background: rgba($color: $color-yellow-light, $alpha: 0.8);
  }
}

.p-05 {
  padding: 2px;
}

.coin {
  padding: 2px 4px;
  gap: 2px;
  background: #feca3466;
}

.bor-yellow-light {
  border: 2px solid $color-yellow-light;
}

.right-items {
  width: 500px;
}
@media only screen and (max-width: 1280px) {
  .pt-5.pb-6 {
    padding-bottom: 0;
  }
}
</style>
