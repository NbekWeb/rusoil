<script setup>
import LinkItems from "@/components/usefull/LinkItems.vue";
import Icon from "@/components/icons/Icon.vue";

import gridFill from "@/components/motor-oil/gridFill.vue";

const links = [
  {
    name: "Главная",
    to: "home",
  },
  {
    name: "Избранное",
    to: "favorite",
  },
];
</script>
<template>
  <div class="text-darkest-gray text-base gap-6">
    <div class="px-8 py-6 border-b border-off-white">
      <link-items :links="links" />
      <h2 class="text-2xl pt-5 pb-6 font-semibold">Избранное</h2>
    </div>
    <div class="grid-5 gap-5 mt-6 px-8">
      <gridFill v-for="i in 10" :key="i" :liked="true" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

@media only screen and (max-width: 1580px) {
  .grid-5 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@media only screen and (max-width: 1280px) {
  .grid-5 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media only screen and (max-width: 1024px) {
  .grid-5 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media only screen and (max-width: 768px) {
  .pt-5 {
    padding-top: 8px;
  }
}
@media only screen and (max-width: 640px) {
  .py-6 {
    padding-bottom: 16px;
    padding-top: 16px;
  }
  .text-2xl {
    font-size: 20px;
    line-height: 24px;
  }
  .px-8 {
    padding: 16px;
  }
  .pb-6 {
    padding-bottom: 8px;
  }
  .mt-6 {
    margin-top: 0px;
  }
  .gap-5 {
    gap: 16px;
  }
  
}
</style>
