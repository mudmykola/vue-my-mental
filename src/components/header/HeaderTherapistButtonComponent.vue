<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  btnText: {
    type: String,
    required: true,
    default: 'Підібрати психотерапевта',
  },
  btnUrl: {
    type: String,
    required: true,
    default: '#',
  }
})
</script>

<template>
<div class="therapist">
  <a class="therapist-link bg-primary rounded-[12px] p-[18px] text-white font-sans font-bold text-[14px]" :href="btnUrl">{{ btnText }}</a>
</div>
</template>