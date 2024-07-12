<script setup>
import TestimonialsSliderComponent from "@/components/testimonials/TestimonialsSliderComponent.vue";
import { ref } from "vue";

const title = ref("Відгуки про Mymental");
</script>

<template>
  <div class="testimonials">
    <div class="container">
      <div class="testimonials-inner">
        <div class="testimonials-inner__title">
          <h2>{{ title }}</h2>
        </div>
        <div class="testimonials-inner__slider">
          <TestimonialsSliderComponent />
        </div>
      </div>
    </div>
  </div>
</template>