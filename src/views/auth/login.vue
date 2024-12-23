<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold my-8 text-center">Вход в личный кабинет</h2>
    <form class="flex flex-col gap-6">
      <input
        type="text"
        placeholder="Введите Email или ИНН"
        class="py-3 px-4 h-12"
      />
      <input type="password" placeholder="Пароль" class="py-3 px-4 h-12" />

      <router-link
        :to="{ name: 'home' }"
        class="mt-8 text-base text- btn bg-yellow-light p-4 rounded-sm text-center font-semibold text-darkest-gray"
      >
        Войти
      </router-link>
      <div class="mt-3 pt-4 text-center">Не помню пароль</div>
    </form>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/style/var.scss";
</style>
