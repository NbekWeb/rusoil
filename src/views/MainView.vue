<script setup>
import { RouterLink, RouterView } from "vue-router";
import Top from "@/components/main/Top.vue";
import Mobile from "@/components/main/Mobile.vue";
import Menu from "@/components/main/Menu.vue";
import { useModalStore } from "@/stores/modal";
import { storeToRefs } from "pinia";
import Icon from "@/components/icons/Icon.vue";
import Modal from "@/components/usefull/Modal.vue";
const modalStore = useModalStore();
const { modal, text } = storeToRefs(modalStore);

const close = () => {
  modalStore.openModal();
};
</script>
<template>
  <div class="main-view">
    <Top />
    <div class="w-full flex gap-0 body-main-view">
      <Menu />
      <div class="custom-scrollbar wrapper">
        <RouterView />
      </div>
    </div>
    <Mobile />
    <div class="modal" v-if="modal != ''" @click="close">
      <div class="modal-content" @click.stop>
        <div class="flex items-center text-xl justify-between close-wrap">
          <span class="font-semibold ">
            {{ text }}
          </span>
          <span @click="close" class=" close-icon point">
            <Icon type="close" />
          </span>
        </div>
        <div class="modal-wrap custom-scrollbar">
          <Modal :type="modal" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/var.scss";

.main-view {
  height: 100vh;
  overflow-y: hidden;
  .body-main-view {
    height: calc(100vh - 80px);
    @media only screen and (max-width: 1280px) {
      height: calc(100vh - 160px);
    }
    @media only screen and (max-width: 880px) {
      height: calc(100vh - 190px);
    }
    .wrapper {
      overflow-y: auto;
      flex-grow: 1;
    }
  }
}
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  position: absolute;
  background: #0000004d;
  .modal-content {
    max-width: 500px;
    max-height: 90%;
    overflow: hidden;
    .close-wrap {
      border-bottom: 1px solid $color-gray-lighter;
      padding: 16px;
    }

    border-radius: 12px;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .modal-wrap {
      flex-grow: 1;
      overflow-y: auto;
      padding: 12px 16px;
    }
  }
  .close-icon {
    transition: 0.3s ease;
    color: rgba($black-900, $alpha: 0.2);
    &:hover {
      color: rgba($black-900, $alpha: 0.5);
    }
  }
}
</style>
