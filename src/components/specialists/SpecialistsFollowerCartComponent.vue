<script setup>
import SpecialistsCartBenefitsComponent from "@/components/specialists/SpecialistsCartBenefitsComponent.vue";
import SpecialistsCartContentComponent from "@/components/specialists/SpecialistsCartContentComponent.vue";
</script>

<template>
  <div class="specialists-cart flex">
    <div class="specialists-cart__benefits">
      <SpecialistsCartBenefitsComponent />
    </div>
    <div class="specialists-cart__content">
      <SpecialistsCartContentComponent alt-text="specialists"/>
    </div>
  </div>
</template>