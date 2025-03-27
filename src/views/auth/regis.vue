<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const phone = ref("");

const formatPhone = (event) => {
  let input = event.target.value.replace(/\D/g, "");

  if (input.length > 11) {
    input = input.substring(0, 11);
  }

  let formatted = "";
  if (input.length > 0) {
    formatted += `(${input.slice(0, 3)}`;
  }
  if (input.length > 3) {
    formatted += `) ${input.slice(3, 6)}`;
  }
  if (input.length > 6) {
    formatted += `-${input.slice(6, 8)}`;
  }
  if (input.length > 8) {
    formatted += `-${input.slice(8, 10)}`;
  }

  event.target.value = formatted;
  phone.value = formatted;
};
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold my-8 text-center">Регистрация</h2>
    <form class="flex flex-col gap-6">
      <div class="flex flex-col gap-1">
        <label for="organization" class="font-medium"
          >Наименование организации</label
        >
        <input
          id="organization"
          type="text"
          placeholder="Введите наименование организации"
          class="py-3 px-4 h-12 w-full rounded"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="inn" class="block text-sm font-medium mb-2">ИНН</label>
        <input
          id="inn"
          type="text"
          placeholder="Введите ИНН"
          class="py-3 px-4 h-12 w-full rounded"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="email" class="block text-sm font-medium mb-2"
          >Электронная почта</label
        >
        <input
          id="email"
          type="email"
          placeholder="Введите email"
          class="py-3 px-4 h-12 w-full rounded"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="phone" class="block text-sm font-medium mb-2"
          >Телефон</label
        >
        <div class="phone-input">
          <span>+7</span>
          <input
            :value="phone"
            @input="formatPhone"
            id="phone"
            type="tel"
            placeholder="(000) 000-00-00"
            class="py-3 px-4 h-12 w-full rounded"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label for="contact" class="block text-sm font-medium mb-2"
          >Контактное лицо</label
        >
        <input
          id="contact"
          type="text"
          placeholder="Введите имя"
          class="py-3 px-4 h-12 w-full rounded"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="password" class="block text-sm font-medium mb-2"
          >Придумайте пароль</label
        >
        <input
          id="password"
          type="password"
          placeholder="Введите пароль"
          class="py-3 px-4 h-12 w-full rounded"
        />
      </div>
      <button
        :disabled="true"
        class="mt-8 border-none text-base text-darkest-gray btn bg-yellow-light p-4 rounded-sm text-center font-semibold cursor-pointer"
      >
        Зарегистрироваться
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

label {
  color: $color-gray-mid;
  font-size: 14px;
}

.phone-input {
  position: relative;
  span {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color:#27272A;
  }
  input {
    padding-left: 34px;
  }
}
</style>
