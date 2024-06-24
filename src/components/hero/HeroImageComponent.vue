<script setup>
import heroBg from '/images/hero-bg.png';

const props = defineProps({
  altText: {
    type: String,
    required: true,
    default: 'Hero Image',
  },
});
</script>

<template>
<div class="hero-image">
  <img :src="heroBg" :alt="altText">
</div>
</template>