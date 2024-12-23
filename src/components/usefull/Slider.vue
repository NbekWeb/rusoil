<script setup>
import { ref, onMounted, nextTick, watch } from "vue";

const slider1Value = ref(0);
const slider2Value = ref(60);
const minGap = 10;
const sliderMaxValue = 60;
const sliderTrack = ref(null); // reference to the slider track element

const slideOne = () => {
  if (parseInt(slider2Value.value) - parseInt(slider1Value.value) <= minGap) {
    slider1Value.value = parseInt(slider2Value.value) - minGap;
  }
  fillColor();
};

const slideTwo = () => {
  if (parseInt(slider2Value.value) - parseInt(slider1Value.value) <= minGap) {
    slider2Value.value = parseInt(slider1Value.value) + minGap;
  }
  fillColor();
};

const fillColor = () => {
  if (sliderTrack.value) {
    // Ensure the sliderTrack is available
    const percent1 = (slider1Value.value / sliderMaxValue) * 100;
    const percent2 = (slider2Value.value / sliderMaxValue) * 100;
    sliderTrack.value.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #FFCD31 ${percent1}% , #FFCD31 ${percent2}%, #dadae5 ${percent2}%)`;
  }
};

// Watch the slider2Value to update the track color when it's changed through the number input
watch(slider2Value, fillColor);
watch(slider1Value, fillColor);

onMounted(() => {
  nextTick(() => {
    slideOne();
    slideTwo();
  });
});
</script>


<template>
  <div>
    <div class="grid-2 gap-4">
      <div class="flex flex-col gap-2">
        <span class="text-xs text-gray-500"> от </span>
        <input
          class="point inp border rounded-sm py-3 px-4"
          v-model.number="slider1Value"
          type="number"
          :min="0"
          :max="slider2Value - minGap"
          step="0.1"
        />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-xs text-gray-500"> до </span>
        <input
          class="point inp border rounded-sm py-3 px-4"
          v-model.number="slider2Value"
          type="number"
          :min="slider1Value + minGap"
          :max="sliderMaxValue"
          step="0.1"
        />
      </div>
    </div>
    <div class="wrapper-slide">
      <div class="container-slide">
        <div ref="sliderTrack" class="slider-track"></div>
        <input
          type="range"
          min="0"
          max="60"
          v-model="slider1Value"
          @input="slideOne"
        />
        <input
          type="range"
          min="0"
          max="60"
          v-model="slider2Value"
          @input="slideTwo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/var.scss";

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.wrapper-slide {
  /* position: relative; */
  width: 100%;
  input {
    border: none;
  }
}
.container-slide {
  position: relative;
  width: 100%;
  height: 100px;
  /* margin-top: 30px; */
}
input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;
}
.slider-track {
  width: 100%;
  height: 3px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 5px;
}
input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  height: 5px;
}
input[type="range"]::-moz-range-track {
  -moz-appearance: none;
  height: 5px;
}
input[type="range"]::-ms-track {
  appearance: none;
  height: 5px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  background-color: $color-yellow-light;
  cursor: pointer;
  margin-top: -9px;
  pointer-events: auto;
  border-radius: 50%;
}
input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 50%;
  background-color: $color-yellow-light;
  pointer-events: auto;
  border: none;
}
input[type="range"]::-ms-thumb {
  appearance: none;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 50%;
  background-color: $color-yellow-light;
  pointer-events: auto;
}
input[type="range"]:active::-webkit-slider-thumb {
  background-color: #ffffff;
  border: 1px solid $color-yellow-light;
}
</style>
