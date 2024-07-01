<script setup>
import HeroImageComponent from "@/components/hero/HeroImageComponent.vue";
import HeroTextComponent from "@/components/hero/HeroTextComponent.vue";
</script>

<template>
  <div class="hero mt-[58px]">
    <div class="container">
      <div class="hero-inner flex justify-between pb-[90px]">
        <div class="hero-inner__text">
          <HeroTextComponent/>
        </div>
        <div class="hero-inner__image">
          <HeroImageComponent alt-text="Hero Image"/>
        </div>
      </div>
    </div>
  </div>
</template>