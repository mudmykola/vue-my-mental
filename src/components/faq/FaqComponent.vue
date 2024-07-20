<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import FaqQuastionComponent from "@/components/faq/FaqQuastionComponent.vue";
const store = useStore();
const faqTitle = ref("Питання та відповіді");
const questionsAndAnswers = computed(() => store.getters.questionsAndAnswers);
</script>

<template>
  <div class="faq">
    <div class="container">
      <div class="faq-inner">
        <h2
          class="faq-inner__title text-center text-[55px] font-bold font-sans mt-16"
        >
          {{ faqTitle }}
        </h2>
        <FaqQuastionComponent :questions="questionsAndAnswers" />
      </div>
    </div>
  </div>
</template>