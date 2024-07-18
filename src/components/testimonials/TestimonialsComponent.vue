<script setup>
import TestimonialsSliderComponent from "@/components/testimonials/TestimonialsSliderComponent.vue";
import { ref } from "vue";

const title = ref("Відгуки про Mymental");
</script>

<template>
  <div class="testimonials bg-muted mt-[128px]">
    <div class="container">
      <div class="testimonials-inner pt-[128px]">
        <div class="testimonials-inner__title mby-12">
          <h2 class="text-[55px] font-bold font-sans text-center">{{ title }}</h2>
        </div>
        <div class="testimonials-inner__slider">
          <TestimonialsSliderComponent />
        </div>
      </div>
    </div>
  </div>
</template>