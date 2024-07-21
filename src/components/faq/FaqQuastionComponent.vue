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
  <div class="faq-question__container flex justify-center mt-5">
    <div class="faq-question__inner min-w-[100%] grid grid-cols-2 gap-x-12 ">
      <div
        v-for="(item, index) in questions"
        :key="index"
        class="faq-item mb-4 cursor-pointer min-w-[500px] "
        @click="toggleExpand(index)"
      >
        <div class="flex items-center">
          <h3
            class="faq-question min-w-[500px]  text-[18px]  leading-5 flex items-center justify-between font-bold text-left bg-white py-8 px-8 rounded-2xl shadow-2xl flex-1"
          >
            {{ item.question }}
            <span class="text-[24px] ml-4">
              {{ expandedIndex === index ? "-" : "+" }}
            </span>
          </h3>
        </div>

        <p
          v-if="expandedIndex === index"
          class="faq-answer text-[16px] text-balance  mt-2 text-left bg-white border border-primary rounded-2xl py-6 px-8"
        >
          {{ item.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-question__container {
  width: 100%;
}

.faq-question__inner {
  max-width: 800px;
}

.faq-item {
  width: 100%;
}

.faq-answer {
  text-align: left;
}
</style>