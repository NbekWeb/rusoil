<script setup>
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: " Новости",
    to: "news",
  },
  {
    name: " Новость",
    to: "newsItem",
  },
];

const goBack = () => {
  router.push({ name: "news" });
};
</script>
<template>
  <div class="text-darkest-gray text-base gap-6">
    <div class="px-8 py-6">
      <link-items :links="links" />
    </div>
    <div class="flex flex-col gap-6 px-8">
      <img src="@/assets/img/news1.jpg" class="w-full rounded-sm" />
      <span class="opacity-50">Опубликовано: 2 апреля 2024 </span>
    </div>
    <h3 class="text-4xl px-8 my-6 font-semibold flex min-w-full">
      Обучение от ZIC в Тюмени
    </h3>

    <div class="flex justify-between gap-20 px-8">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-6">
          <p class="text-base">
            На прошлой неделе в Тюмени прошёл технический семинар бренда ZIC,
            организованный компанией РУСОЙЛ для своих клиентов. Мероприятие
            собрало экспертов отрасли и партнёров, заинтересованных в углублении
            своих знаний о современных технологиях и инновациях в области
            смазочных материалов.
          </p>
          <p class="text-base">
            Вёл семинар Извеков Денис, технический специалист ZIC. В ходе
            презентации участникам были представлены последние разработки,
            используемые в производстве смазочных материалов ZIC. Кроме того,
            эксперт подробно представил характеристики, преимущества и области
            применения продукции, подчёркивая высокое качество и соответствие
            современным стандартам. Участники семинара получили возможность
            задать вопросы и обсудить конкретные ситуации, вызывающие интерес.
          </p>
          <p class="text-base">
            Одной из ключевых тем семинара стало обновление дизайна упаковки
            смазочных материалов ZIC. Эксперты объяснили, как новое оформление
            отражает ценности бренда и соответствует современным требованиям
            рынка. В частности, изменения в дизайне направлены на улучшение
            видимости и удобства распознавания продукции потребителями.
          </p>
          <p class="text-base">
            Особое внимание было уделено адаптации продукции ZIC к растущему
            сегменту китайского автопрома. Специалисты проанализировали
            потребности как легковых, так и грузовых автомобилей, предложив
            решения, которые могут повысить эффективность работы инженерных
            систем.
          </p>
          <p class="text-base">
            В завершение мероприятия гости получили полезные материалы и
            рекомендациями, которые помогут им оптимизировать выбор смазочных
            материалов для своих потребностей. Компания РУСОЙЛ благодарит всех
            участников семинара и приглашает обращаться за дополнительной
            информацией и консультациями по всем вопросам, связанным с
            продукцией ZIC.
          </p>
          <p class="text-base">
            Подобный формат мероприятия, безусловно, способствует укреплению
            партнерских отношений и повышению уровня знаний клиентов о
            современных смазочных материалах, что, в свою очередь, положительно
            сказывается на эффективности их бизнеса.
          </p>
        </div>
        <div class="flex">
          <div
            @click="goBack"
            class="gap-2 inp flex items-center px-4 py-3 border rounded-sm point"
          >
            <Icon type="chevron-left" class="text-2xl" />
            К списку новостей
          </div>
        </div>
      </div>
      <div class="text-xl min-w-500">
        <span class="font-semibold text-xl">Другие новости:</span>
        <div class="flex mt-6 flex-col">
          <div
            class="w-full flex gap-2 flex-col py-3 border-b border-off-white"
          >
            <span class="text-gray-light text-xs"> 2 апреля 2024</span>
            <span class="font-semibold">Обучение от ZIC в Тюмени </span>
          </div>
          <div
            class="w-full flex gap-2 flex-col py-3 border-b border-off-white"
          >
            <span class="text-gray-light text-xs"> 2 апреля 2024</span>
            <span class="font-semibold"
              >Открытие второго центра в Екатеринбурге!
            </span>
          </div>
          <div
            class="w-full flex gap-2 flex-col py-3 border-b border-off-white"
          >
            <span class="text-gray-light text-xs"> 2 апреля 2024</span>
            <span class="font-semibold"
              >Новинка! Масло Teboil в магазинах Масломаrt
            </span>
          </div>
          <div
            class="w-full flex gap-2 flex-col py-3 border-b border-off-white"
          >
            <span class="text-gray-light text-xs"> 2 апреля 2024</span>
            <span class="font-semibold"
              >Итоги сезона Уральской лиги дрифта</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="mt-20 mb-5">
      <h2 class="text-2xl py-5 px-8 font-semibold">Новости</h2>

      <div class="grid-5 gap-6 px-8">
        <div class="item point flex flex-col gap-3" v-for="i of 5" :key="i">
          <img src="@/assets/img/news1.jpg" class="rounded-sm w-full" />
          <div class="flex flex-col gap-2">
            <span class="text-base"> 2 апреля 2024 </span>
            <span class="title font-semibold text-base">
              Обучение от ZIC в Тюмени
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

.item {
  transition: 0.3s ease;
  img {
    object-fit: cover;
  }
  &:hover {
    .title {
      color: $color-yellow-link;
    }
  }
}

@media only screen and (max-width: 1280px) {
  .min-w-500 {
    min-width: 350px;
  }
  .gap-20 {
    gap: 40px;
  }
  .grid-5 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media only screen and (max-width: 1180px) {
  .min-w-500 {
    min-width: 250px;
  }
  .grid-5 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media only screen and (max-width: 1024px) {
  .min-w-500 {
    display: none;
  }
  .my-6 {
    margin: 16px 0;
  }
  .text-4xl {
    font-size: 28px;
    line-height: 32px;
  }
}
@media only screen and (max-width: 640px) {
  .grid-5 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .py-6 {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .mt-20 {
    margin-top: 32px;
  }
  .text-4xl,
  .text-2xl {
    font-size: 20px;
    line-height: 24px;
  }
  .text-base {
    font-size: 14px;
    line-height: 16px;
  }
  .gap-2 {
    gap: 4px;
  }
  .gap-6 {
    gap: 12px;
  }
}
</style>
