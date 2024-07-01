<script setup>
import HeroComponent from "@/components/hero/HeroComponent.vue";
import ManualComponent from "@/components/manual/ManualComponent.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <HeroComponent/>
    <ManualComponent/>
  </DefaultLayout>
</template>