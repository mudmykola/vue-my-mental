<script setup>
import { ref } from 'vue';
import IconLogo from "@/components/icons/IconLogo.vue";

const logoUrl = ref('/');

const updateLogoUrl = (newUrl) => {
  logoUrl.value = newUrl;
};
</script>

<template>
<div class="header-logo">
  <a :href="logoUrl" aria-label="Home">
    <IconLogo #icon/>
  </a>
  </div>
</template>