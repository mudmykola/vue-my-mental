<script setup>
import { ref } from 'vue';
import BaseButton from "@/components/ui/BaseButton.vue";

const heroTitle = ref('Психотерапія і ментальне здоровʼя');
const showTherapistList = ref(false);

const therapistList = ref([
  { name: 'Психологи', link: '' },
  { name: 'Психотерапевти', link: '' },
  { name: 'Психіатри', link: '' },
  { name: 'Онлайн', link: '' },
  { name: 'Офлайн', link: '' }
]);

const toggleTherapistList = () => {
  showTherapistList.value = !showTherapistList.value;
};
</script>

<template>
  <div class="hero-text__inner w-[390px]">
    <div class="hero-text__title mb-[39px]">
      <h2 class="text-[55px] font-sans font-bold leading-[55px]">{{ heroTitle }}</h2>
    </div>
    <div class="hero-text__find--therapist mb-[8px]">
      <BaseButton
          class="cursor-pointer w-[263px] text-center"
          :href="'/find-therapist'"
          :text="'Підібрати психотерапевта'"
          variant="primary"
          size="md"
      />
    </div>
    <div class="hero-text__view--therapist">
      <div class="hero-text__view--btn mb-[10px]" @click="toggleTherapistList">
        <BaseButton
            class="cursor-pointer w-[263px] text-center"
            :text="'Показати всіх фахівців'"
            variant="secondary"
            size="md"
        />
      </div>
      <div class="hero-text__view--therapist__list" v-if="showTherapistList">
        <ul>
          <li v-for="therapist in therapistList" :key="therapist.name">
            <a :href="therapist.link">{{ therapist.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>