<script setup>
import HeroComponent from "@/components/hero/HeroComponent.vue";
import ManualComponent from "@/components/manual/ManualComponent.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import SpecialistsComponent from "@/components/specialists/SpecialistsComponent.vue";
</script>

<template>
  <DefaultLayout>
    <HeroComponent/>
    <ManualComponent/>
    <SpecialistsComponent/>
  </DefaultLayout>
</template>