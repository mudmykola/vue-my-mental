<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  textTitle: {
    type: String,
    required: true
  },
  textDesc: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div :class="['manual-text-image grid grid-cols-1 md:grid-cols-2 gap-4', { 'reverse-layout': reverse }]">
    <div class="text-content flex items-center justify-center p-4">
      <div class="text-content-title w-[355px] ">
        <h2 class="text-[40px] leading-10 font-sans font-bold text-black mb-[20px]">{{ textTitle }}</h2>
        <p class="text-xl font-normal font-sans text-secondary">{{ textDesc }}</p>
      </div>
    </div>
    <div class="image-content flex items-center justify-center p-4">
      <img :src="imgSrc" :alt="imgAlt" class="max-w-full h-auto" loading="lazy" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.manual-text-image {
  &.reverse-layout {
    @media (min-width: 768px) {
      .text-content {
        order: 2;
      }
      .image-content {
        order: 1;
      }
    }
  }
}
.image-content{
  img{
    image-rendering: pixelated;
  }
}
</style>