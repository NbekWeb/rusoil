<script setup>
import tableFill from "./tableFill.vue";
import rowFill from "./rowFill.vue";
import gridFill from "./gridFill.vue";

defineProps({
  type: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "table_fill",
  },
});
</script>

<template>
  <tableFill v-if="name == 'table_fill'" :type="type" />
  <rowFill v-else-if="name == 'row_fill'" :type="type" />
  <gridFill v-else :type="type" />
</template>
