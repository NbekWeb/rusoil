<script setup>
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";
import Switch from "@/components/usefull/Switch.vue";
const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: "Мой аккаунт",
    to: "myAccount",
  },
];
</script>
<template>
  <div class="text-darkest-gray text-base gap-6">
    <div class="px-8 py-6 border-b border-off-white">
      <link-items :links="links" />
      <h2 class="text-2xl pt-5 pb-6 font-semibold">Мой аккаунт</h2>
    </div>
    <div class="flex w-full gap-6">
      <div class="p-8 flex-grow">
        <div class="pb-8 flex justify-between">
          <span class="text-2xl font-semibold"> Договоры </span>
          <span class="flex items-center gap-2">
            <Icon type="plus" class="text-2xl opacity-50" />
            Добавить
          </span>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="rounded-sm border bor-black-8 px-5 py-3 bg-gray-50 flex flex-col gap-3"
          >
            <div class="flex items-center justify-between">
              <div class="items-center flex gap-3">
                <div
                  class="min-w-12 h-12 bg-black-8 rounded-full flex items-center justify-center"
                >
                  <Icon type="file" class="text-2xl opacity-40" />
                </div>
                <span class="font-semibold"
                  >ООО «СМ РУСОЙЛ» №И-139/2018 от 23.04.2018</span
                >
              </div>
              <Icon type="pen" class="opacity-50 text-2xl" />
            </div>
            <div class="grid-4 gap-3">
              <div class="flex flex-col gap-1">
                <span class="opacity-50">Срок действия </span>
                <span> 01.01.2025 </span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="opacity-50">Отсрочка платежа </span>
                <span>35 дней </span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="opacity-50">Кредитный лимит</span>
                <span> 30 000 000 ₽</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="opacity-50">Задолженность </span>
                <span class="text-red">1 000 000 ₽ </span>
              </div>
            </div>
          </div>
          <div
            class="rounded-sm border bor-black-8 px-5 py-3 bg-gray-50 flex flex-col gap-3"
          >
            <div class="flex items-center justify-between">
              <div class="items-center flex gap-3">
                <div
                  class="min-w-12 h-12 bg-black-8 rounded-full flex items-center justify-center"
                >
                  <Icon type="file" class="text-2xl opacity-40" />
                </div>
                <span class="font-semibold"
                  >ООО «СМ РУСОЙЛ» №И-139/2018 от 23.04.2018</span
                >
              </div>
              <Icon type="pen" class="opacity-50 text-2xl" />
            </div>
            <div class="grid-4 gap-3">
              <div class="flex flex-col gap-1">
                <span class="opacity-50">Срок действия </span>
                <span> 01.01.2025 </span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="opacity-50">Отсрочка платежа </span>
                <span>35 дней </span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="opacity-50">Кредитный лимит</span>
                <span> 30 000 000 ₽</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="opacity-50">Задолженность </span>
                <span class="text-red">1 000 000 ₽ </span>
              </div>
            </div>
          </div>
        </div>
        <div class="py-8 flex justify-between">
          <span class="text-2xl font-semibold"> Адреса доставок </span>
          <span class="flex items-center gap-2">
            <Icon type="plus" class="text-2xl opacity-50" />
            Добавить
          </span>
        </div>
        <div class="rounded-sm border bor-black-8 bg-gray-50">
          <div
            class="flex px-5 items-center justify-between gap-3 py-6 border-b bor-black-8 point"
          >
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >625062, Тюменская обл, Тюмень г, Федюнинского ул, дом № 41,
                строение 3
              </span>
              <span>График работы: ПН-ПТ 9:00-19:00, СБ-ВС 10:00-17:00</span>
            </div>
            <div class="flex gap-3 items-center hidden">
              <Icon type="copy" class="text-2xl opacity-50" />
              <Icon type="pen" class="text-2xl opacity-50" />
            </div>
          </div>
          <div
            class="flex px-5 items-center justify-between gap-3 py-6 border-b bor-black-8 point"
          >
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >625062, Тюменская обл, Тюмень г, Федюнинского ул, дом № 41,
                строение 3
              </span>
              <span>График работы: ПН-ПТ 9:00-19:00, СБ-ВС 10:00-17:00</span>
            </div>
            <div class="flex gap-3 items-center hidden">
              <Icon type="copy" class="text-2xl opacity-50" />
              <Icon type="pen" class="text-2xl opacity-50" />
            </div>
          </div>
          <div
            class="flex px-5 items-center justify-between gap-3 py-6 border-b bor-black-8 point"
          >
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >625062, Тюменская обл, Тюмень г, Федюнинского ул, дом № 41,
                строение 3
              </span>
              <span>График работы: ПН-ПТ 9:00-19:00, СБ-ВС 10:00-17:00</span>
            </div>
            <div class="flex gap-3 items-center hidden">
              <Icon type="copy" class="text-2xl opacity-50" />
              <Icon type="pen" class="text-2xl opacity-50" />
            </div>
          </div>
          <div
            class="flex px-5 items-center justify-between gap-3 py-6 border-b bor-black-8 point"
          >
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >625062, Тюменская обл, Тюмень г, Федюнинского ул, дом № 41,
                строение 3
              </span>
              <span>График работы: ПН-ПТ 9:00-19:00, СБ-ВС 10:00-17:00</span>
            </div>
            <div class="flex gap-3 items-center hidden">
              <Icon type="copy" class="text-2xl opacity-50" />
              <Icon type="pen" class="text-2xl opacity-50" />
            </div>
          </div>
          <div
            class="flex px-5 items-center justify-between gap-3 py-6 border-b bor-black-8 point"
          >
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >625062, Тюменская обл, Тюмень г, Федюнинского ул, дом № 41,
                строение 3
              </span>
              <span>График работы: ПН-ПТ 9:00-19:00, СБ-ВС 10:00-17:00</span>
            </div>
            <div class="flex gap-3 items-center hidden">
              <Icon type="copy" class="text-2xl opacity-50" />
              <Icon type="pen" class="text-2xl opacity-50" />
            </div>
          </div>
          <div
            class="flex px-5 items-center justify-between gap-3 py-6 border-b bor-black-8 point"
          >
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >625062, Тюменская обл, Тюмень г, Федюнинского ул, дом № 41,
                строение 3
              </span>
              <span>График работы: ПН-ПТ 9:00-19:00, СБ-ВС 10:00-17:00</span>
            </div>
            <div class="flex gap-3 items-center hidden">
              <Icon type="copy" class="text-2xl opacity-50" />
              <Icon type="pen" class="text-2xl opacity-50" />
            </div>
          </div>
          <div
            class="flex px-5 items-center justify-between gap-3 py-6 border-b bor-black-8 point"
          >
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >625062, Тюменская обл, Тюмень г, Федюнинского ул, дом № 41,
                строение 3
              </span>
              <span>График работы: ПН-ПТ 9:00-19:00, СБ-ВС 10:00-17:00</span>
            </div>
            <div class="flex gap-3 items-center hidden">
              <Icon type="copy" class="text-2xl opacity-50" />
              <Icon type="pen" class="text-2xl opacity-50" />
            </div>
          </div>
          <div
            class="flex px-5 items-center justify-between gap-3 py-6 border-b bor-black-8 point"
          >
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >625062, Тюменская обл, Тюмень г, Федюнинского ул, дом № 41,
                строение 3
              </span>
              <span>График работы: ПН-ПТ 9:00-19:00, СБ-ВС 10:00-17:00</span>
            </div>
            <div class="flex gap-3 items-center hidden">
              <Icon type="copy" class="text-2xl opacity-50" />
              <Icon type="pen" class="text-2xl opacity-50" />
            </div>
          </div>
          <div class="flex px-5 items-center justify-between gap-3 py-6 point">
            <div class="flex flex-col gap-1">
              <span class="font-semibold"
                >625062, Тюменская обл, Тюмень г, Федюнинского ул, дом № 41,
                строение 3
              </span>
              <span>График работы: ПН-ПТ 9:00-19:00, СБ-ВС 10:00-17:00</span>
            </div>
            <div class="flex gap-3 items-center hidden">
              <Icon type="copy" class="text-2xl opacity-50" />
              <Icon type="pen" class="text-2xl opacity-50" />
            </div>
          </div>
        </div>
        <div class="pb-5 pt-10">
          <span class="text-2xl font-semibold"> Уведомления </span>
          <div class="px-6 mt-5 rounded-sm border bor-black-8 bg-gray-50">
            <div class="py-3 w-full flex justify-between border-b bor-black-8">
              <span class="font-semibold">Акции</span>
              <Switch />
            </div>
            <div class="py-3 w-full flex justify-between border-b bor-black-8">
              <span class="font-semibold">Новости компании</span>
              <Switch />
            </div>
            <div class="py-3 w-full flex justify-between">
              <span class="font-semibold">Статусы заказов</span>
              <Switch />
            </div>
          </div>
        </div>
      </div>
      <div class="py-8 flex flex-col gap-4 min-w-500 ">
        <div class="text-xl font-semibold flex justify-between items-center pr-6">
          Об организации
          <icon type="pen" class="text-2xl opacity-50" />
        </div>
        <div class="flex flex-col gap-1 pt-2">
          <span class="opacity-50">Логин</span>
          <span>R7203313650</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="opacity-50">Наименование организации</span>
          <span>ООО «ТРЕЙД СЕРВИС»</span>
        </div>

        <div class="flex flex-col gap-1">
          <span class="opacity-50">Фактический адрес</span>
          <span>625031, Тюмень, Юганский проезд 33</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="opacity-50">Привязка к заказу</span>
          <span>625031, Тюмень, ул. Федюнинского 41/3</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="opacity-50">ИНН / КПП</span>
          <span>7293313650 / 720301001</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="opacity-50">Email</span>
          <span class="text-yellow-light">info@maslomart.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

.hidden {
  display: none;
}
.point:hover {
  .hidden {
    display: flex;
  }
}

.bor-black-8 {
  border-color: rgba($color: $black, $alpha: 0.08);
}
.bg-black-8 {
  background: rgba($color: $black, $alpha: 0.08);
}
.rounded-t-sm {
  border-radius: 12px 12px 0 0;
}
.rounded-b-sm {
  border-radius: 0 0 12px 12px;
}
.grid-6 {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
}
.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

</style>
