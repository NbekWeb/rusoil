<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  check: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:check"]);

// Create a local reactive state for the checkbox
const localCheck = ref(props.check);

// Watch for changes to the localCheck and emit the update to the parent
watch(localCheck, (newValue) => {
  emit("update:check", newValue);
});
</script>

<template>
  <label class="check">
    <input type="checkbox" v-model="localCheck" />
    <span class="checkmark"></span>
  </label>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";
.check {
  min-width: 20px;
  max-height: 20px;
  min-height: 20px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: $color-gray-lighter;
    border-radius: 4px;
    transition: background-color 0.2s ease;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  input:checked ~ .checkmark {
    background-color: $color-yellow-light;

    &:after {
      display: block;
    }
  }

  .checkmark:after {
    left: 7px;
    top: 3px;
    width: 3px;
    height: 8px;
    border: solid $color-darkest-gray;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
}
</style>
