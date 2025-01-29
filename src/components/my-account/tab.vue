<script setup>
import { ref } from "vue";

import Icon from "@/components/icons/Icon.vue";
import agreement from "@/components/my-account/agreement.vue";
import company from "@/components/my-account/company.vue";
import adress from "@/components/my-account/adress.vue";
import notification from "@/components/my-account/notification.vue";

const activeTab = ref("Договоры");

const tabs = ["Договоры", "Адреса доставок", "О компании", "Уведомления"];
</script>

<template>
  <div class="p-8 text-darkest-gray overflow-hidden">
    <div
      class="tab-head relative h-10 flex gap-6 items-center tr-scrollbar overflow-x-auto text-gray-500 point font-semibold"
    >
      <div
        v-for="tab in tabs"
        :key="tab"
        class="tab-item min-w-max h-full flex items-center cursor-pointer"
        :class="{ 'active-tab': activeTab === tab }"
        @click="activeTab = tab"
      >
        <span class="">{{ tab }}</span>
      </div>
    </div>
    <div class="mt-6">
      <div v-if="activeTab == 'Договоры'">
        <div class="flex justify-between point mb-5">
          <span class="text-2xl font-semibold"> Договоры </span>
          <span class="flex items-center gap-2">
            <Icon type="plus" class="text-2xl opacity-50" />
          </span>
        </div>
        <div class="flex flex-col gap-3">
          <agreement v-for="i in 2" :key="i" />
        </div>
      </div>
      <div v-else-if="activeTab == 'Адреса доставок'">
        <div class="flex justify-between point mb-5">
          <span class="text-2xl font-semibold"> Адреса доставок </span>
          <span class="flex items-center gap-2">
            <Icon type="plus" class="text-2xl opacity-50" />
          </span>
        </div>
        <adress />
      </div>
      <div v-else-if="activeTab == 'О компании'">
        <div class="flex justify-between point mb-5">
          <span class="text-2xl font-semibold"> Об организации</span>
          <span class="flex items-center gap-2">
            <Icon type="pen" class="text-2xl opacity-50" />
          </span>
        </div>
        <company />
      </div>
      <div v-else>
        <div class="flex justify-between point mb-5">
          <span class="text-2xl font-semibold"> Уведомления</span>
        </div>
        <notification />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

@media only screen and (max-width: 640px) {
  .p-8 {
    padding: 16px;
  }
}

/* Main tab container bottom border */
.tab-head {
  border-bottom: 2px solid $color-off-white; /* Light gray */
  display: flex;
  align-items: center; /* Fix vertical alignment */
}

/* Default tab styles */
.tab-item {
  position: relative;
}

/* Active tab styles */
.active-tab {
  color: $color-darkest-gray;
}

/* Active tab bottom border */
.active-tab::after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 2px;
  background: $color-red; /* Active tab border color */
}
.bor-black-8 {
  border-color: rgba($color: $black, $alpha: 0.08);
}

@media only screen and (max-width: 640px) {
  .text-2xl {
    font-size: 20px;
    line-height: 24px;
  }
  .text-base {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
