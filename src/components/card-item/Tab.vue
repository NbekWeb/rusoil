<template>
  <div>
    <div class="tab-wrapper relative">
      <div class="tabs flex gap-6 w-full">
        <span
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            'text-base opacity-50 py-3 relative point font-semibold',
            { active: activeTab === index },
          ]"
          @click="setActiveTab(index)"
        >
          {{ tab }}
        </span>
      </div>
    </div>
    <div class="mt-6 text-xs">
      <template v-if="activeTab == 0">
        <div class="flex flex-col">
          <div class="flex gap-1" v-for="(item, i) of characters" :key="i">
            <span class="opacity-50">{{ item.label }}</span>
            <span class="flex-grow">
              <span class="w-full flex dashed mt"></span>
            </span>
            <span class="pr-20"> {{ item.value }}</span>
          </div>
        </div>
      </template>
      <template v-else-if="activeTab == 1">
        <div class="">
          <p class="mb-4">
            Barox Ultra Revo Plus SAE 5W-30 API SN A5/B5-12 – высокоэффективное
            маловязкое моторное масло, созданное на основе синтетической
            технологии. Превосходит самые высокие требования к испытаниям,
            предъявляемые известными производителями.
          </p>
          <p>
            Сочетание нетрадиционных базовых масел на основе гидрокрекинга и
            новейшей технологии присадок позволило получить моторное масло,
            которое гарантированно снижает расход масла и топлива, обеспечивая
            при этом быстрое проникновение масла в двигатель.
          </p>
          <div class="flex mt-6 gap-3 flex-col">
            <h3 class="font-semibold">Применение</h3>
            <p>
              Разработано в соответствии с последними спецификациями моторных
              масел, оптимально подходит для современных бензиновых двигателей с
              многоклапанной технологией и турбонаддувом с охлаждением
              наддувочного воздуха и без него, совместимо с новейшими
              бензиновыми каталитическими нейтрализаторами.
            </p>
            <span class="text-orange-light point">Читать полностью</span>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="w-full">
          <table class="w-full">
            <thead class="  ">
              <tr class="w-full bg-gray-50 rounded-sm grid-3">
                <th class="px-4 py-3 opacity-50 text-start">Склад</th>
                <th class="px-4 py-3 opacity-50 text-start">Наличие</th>
                <th class="px-4 py-3 opacity-50 text-start">
                  Доставка
                  <span class="sm-hidden"> до вас </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="grid-3 point w-full item-table rounded-sm"
                v-for="i of 6"
                :key="i"
              >
                <td class="px-4 py-3 text-start">Тюмень</td>
                <td class="px-4 py-3 text-start">
                  <div class="flex gap-3 items-center">
                    <span class="min-w-2 h-2 rounded-full flex bg-green-500">
                    </span>
                    21 шт
                  </div>
                </td>
                <td class="px-4 py-3 flex justify-end font-semibold">Завтра</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const characters = [
  { label: "Артикул", value: "1818004" },
  { label: "Бренд", value: "BAROX" },
  { label: "Класс вязкости SAE/ISO", value: "5W-30" },
  { label: "Классификация по ACEA", value: "ACEA A5/B5" },
  { label: "Классификация по API", value: "API SN" },
  { label: "Тип масла", value: "Синтетическое" },
  { label: "Объём", value: "4 л" },
];

const tabs = ["Характеристики", "Описание ", "Наличие"];
const activeTab = ref(0);
const setActiveTab = (index) => {
  activeTab.value = index;
};
</script>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

.tab-wrapper {
  border-bottom: 1px solid rgba($color: $color-darkest-gray, $alpha: 0.1);
}

.item-table {
  &:hover {
    background: rgba($color: $color-yellow-light, $alpha: 0.1);
  }
}

.dashed {
  border-bottom: 1px dashed rgba($color: $color-darkest-gray, $alpha: 0.4);
}
.mt {
  margin-top: 14px;
}

.tabs span.active {
  opacity: 100%;
  &::after {
    content: "";
    position: absolute;
    bottom: -1px; /* Align with the wrapper border */
    left: 50%;
    transform: translateX(-50%);
    width: 100%; /* Narrower width for the selected tab */
    height: 1px;
    background-color: $color-red; /* Highlight color */
  }
}
@media only screen and (max-width: 640px) {
  .sm-hidden {
    display: none;
  }
  .py-3 {
    padding-bottom: 8px;
    padding-top: 8px;
  }
  .px-4.justify-end {
    justify-content: center;
  }
}
</style>
