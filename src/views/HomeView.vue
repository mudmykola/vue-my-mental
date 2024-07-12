<script setup>
import HeroComponent from "@/components/hero/HeroComponent.vue";
import ManualComponent from "@/components/manual/ManualComponent.vue";
import SpecialistsComponent from "@/components/specialists/SpecialistsComponent.vue";
import TestimonialsComponent from "@/components/testimonials/TestimonialsComponent.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <HeroComponent/>
    <ManualComponent/>
    <SpecialistsComponent/>
    <TestimonialsComponent/>
  </DefaultLayout>
</template>