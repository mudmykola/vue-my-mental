<script setup>
import Breadcrumbs from "@/components/common/Breadcrumbs.vue";
import { ref } from "vue";

const expertsBannerTitle = ref("Наші фахівці");
const expertsFilterResult = ref("По вашому запиту знайдено психологів:");
</script>

<template>
  <div class="experts-banner">
    <div class="experts-banner__inner">
      <div class="experts-breadcrumb">
        <Breadcrumbs />
      </div>
      <h2>{{ expertsBannerTitle }}</h2>
      <p>{{ expertsFilterResult }}<span></span></p>
    </div>
  </div>
</template>