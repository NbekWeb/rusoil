<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const phone = ref("");

const formatPhone = (event) => {
  let input = event.target.value.replace(/\D/g, ""); // Remove all non-numeric characters

  // Ensure input starts with 7 (for Russian phone numbers)
  if (input[0] !== "7") {
    input = "7" + input;
  }

  if (input.length > 11) {
    input = input.substring(0, 11); // Limit to 11 digits
  }

  // Format the input to the desired mask
  let formatted = `+7`;
  if (input.length > 1) {
    formatted += ` (${input.slice(1, 4)}`;
  }
  if (input.length > 4) {
    formatted += `) ${input.slice(4, 7)}`;
  }
  if (input.length > 7) {
    formatted += `-${input.slice(7, 9)}`;
  }
  if (input.length > 9) {
    formatted += `-${input.slice(9, 11)}`;
  }

  event.target.value = formatted;
  phone.value = formatted; // Update the reactive variable
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
          class="py-3 px-4 h-12 w-full border border-gray-300 rounded"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="inn" class="block text-sm font-medium mb-2">ИНН</label>
        <input
          id="inn"
          type="text"
          placeholder="Введите ИНН"
          class="py-3 px-4 h-12 w-full border border-gray-300 rounded"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="email" class="block text-sm font-medium mb-2"
          >Электронная почта</label
        >
        <input
          id="email"
          type="email"
          placeholder="Введите электронную почту"
          class="py-3 px-4 h-12 w-full border border-gray-300 rounded"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="phone" class="block text-sm font-medium mb-2"
          >Телефон</label
        >
        <input
          :value="phone"
          @input="formatPhone"
          id="phone"
          type="tel"
          placeholder="+7 (000) 000-00-00"
          class="py-3 px-4 h-12 w-full border border-gray-300 rounded"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="contact" class="block text-sm font-medium mb-2"
          >Контактное лицо</label
        >
        <input
          id="contact"
          type="text"
          placeholder="Введите имя контактного лица"
          class="py-3 px-4 h-12 w-full border border-gray-300 rounded"
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
          class="py-3 px-4 h-12 w-full border border-gray-300 rounded"
        />
      </div>
      <router-link
      :to="{name:'home'}"
        class="mt-8 text-base text-darkest-gray btn bg-yellow-light p-4 rounded-sm text-center font-semibold cursor-pointer"
      >
        Зарегистрироваться
      </router-link>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

label {
  color: $color-gray-mid;
  font-size: 14px;
}
</style>
