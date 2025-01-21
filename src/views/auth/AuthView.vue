<script setup>
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";

import Icon from "@/components/icons/Icon.vue";

const route = useRoute();
</script>
<template>
  <div class="auth-wrap custom-scrollbar">
    <div class="auth-view p-6 flex gap-6 min-h-full">
      <div class="rounded-sm bg-white py-6 px-20 login text-darkest-gray">
        <div
          class="bg-off-white p-1 flex gap-0 items-center rounded-sm login-wrap"
        >
          <router-link
            :to="{ name: 'login' }"
            :class="[
              'text-darkest-gray item font-medium rounded-sm p-2 text-base flex justify-center',
              route.name != 'regis' ? 'bg-white' : '',
            ]"
            >Вход
          </router-link>
          <router-link
            :to="{ name: 'regis' }"
            :class="[
              'text-darkest-gray item font-medium rounded-sm p-2 text-base flex justify-center',
              route.name == 'regis' ? 'bg-white' : '',
            ]"
            >Регистрация
          </router-link>
        </div>

        <router-view />
      </div>
      <div class="flex-grow flex flex-col right-part">
        <div class="py-6 flex items-center justify-between">
          <img src="@/assets/img/logo.png" class="h-12" />
          <div class="flex items-center gap-8">
            <a
              href="tel:+73452696915"
              class="text-gray-light flex items-center gap-1"
            >
              <Icon type="phone" class="text-xl" />
              <span> +7 (3452) 69-69-15 </span>
            </a>
            <a
              href="mailto:Info@rusoil72.ru"
              class="text-gray-light flex items-center gap-1"
            >
              <Icon type="mail" class="text-xl" />
              <span> Info@rusoil72.ru </span>
            </a>
          </div>
        </div>
        <div class="rounding gap-15 px-16 flex-grow items-center">
          <div class="rounded-full bg-gray-600"></div>
          <div class="rounded-full bg-gray-500"></div>
          <div class="rounded-full bg-gray-light"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/var.scss";

.auth-wrap {
  height: 100vh;
  min-height: 100vh;
  overflow-y: auto;
  background: $color-dark-gray;
  .auth-view {
    a {
      transition: 0.3s ease;
      &:hover {
        color: $white;
      }
    }
    .rounding {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      .rounded-full {
        /* padding-top: 100%; */
        aspect-ratio: 1 / 1;
      }
    }
  }
  .login {
    width: 440px;
    .login-wrap {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      .item {
        transition: 0.3s ease;
        &:hover {
          color: $color-darkest-gray;
          background: $white;
        }
      }
    }
    .btn:hover {
      opacity: 80%;
    }
  }
}
@media only screen and (max-width: 1024px) {
  .right-part {
    display: none;
  }
  .auth-view.p-6 {
    padding: 0;
    .login {
      border-radius: 0;
      width: 100%;
    }
  }
}

@media only screen and (max-width: 640px) {
  .px-20 {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
