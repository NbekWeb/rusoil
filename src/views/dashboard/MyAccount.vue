<script setup>
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";
import agreement from "@/components/my-account/agreement.vue";
import company from "@/components/my-account/company.vue";
import adress from "@/components/my-account/adress.vue";
import notification from "@/components/my-account/notification.vue";
import tab from "@/components/my-account/tab.vue";

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
    <div class="flex w-full gap-6 hide">
      <div class="p-8 flex-grow">
        <div class="pb-8 flex justify-between">
          <span class="text-2xl font-semibold"> Договоры </span>
          <span class="flex items-center gap-2">
            <Icon type="plus" class="text-2xl opacity-50" />
            Добавить
          </span>
        </div>
        <div class="flex flex-col gap-3">
          <agreement v-for="i in 2" :key="i" />
        </div>
        <div class="py-8 flex justify-between">
          <span class="text-2xl font-semibold"> Адреса доставок </span>
          <span class="flex items-center gap-2">
            <Icon type="plus" class="text-2xl opacity-50" />
            Добавить
          </span>
        </div>
        <adress />
        <div class="pb-5 pt-10">
          <span class="text-2xl font-semibold"> Уведомления </span>
          <notification />
        </div>
      </div>
      <div class="py-8 flex flex-col gap-4 min-w-500">
        <div
          class="text-xl font-semibold flex justify-between items-center pr-6"
        >
          Об организации
          <icon type="pen" class="text-2xl opacity-50" />
        </div>
        <company />
      </div>
    </div>
    <tab class="show" />
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

@media only screen and (min-width: 1420px) {
  .show {
    display: none;
  }
}
@media only screen and (max-width: 1420px) {
  .hide {
    display: none;
  }
}
@media only screen and (max-width: 1280px) {
  .pb-6 {
    padding-bottom: 0;
  }
}
@media only screen and (max-width: 640px) {
  .pt-5 {
    padding-top: 8px;
  }
  .pb-6 {
    padding-bottom: 0;
  }
}
</style>
