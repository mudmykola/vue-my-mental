<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
	questions: {
		type: Array,
		required: true,
	},
});

const expandedIndex = ref(null);

const toggleExpand = (index) => {
	expandedIndex.value = expandedIndex.value === index ? null : index;
};
</script>

<template>
  <div class="faq-question__inner grid grid-cols-2 gap-y-2 mt-5">
    <div
        v-for="(item, index) in questions"
        :key="index"
        class="faq-item mb-4 cursor-pointer"
        @click="toggleExpand(index)"
    >
      <h3 class="faq-question font-bold">{{ item.question }}</h3>
      <p v-if="expandedIndex === index" class="faq-answer mt-2 ml-4">{{ item.answer }}</p>
    </div>
  </div>
</template>