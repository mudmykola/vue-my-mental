<script setup>
import FooterLogoComponent from "@/components/footer/FooterLogoComponent.vue";
</script>

<template>
  <div class="footer-inner bg-secondaryWhite mt-32">
    <div class="container">
      <div class="footer-inner__box grid grid-cols-4">
        <div class="footer-info__logo">
          <FooterLogoComponent />
        </div>
        <div class="footer-info__menu">menu</div>
        <div class="footer-info__legal">legal</div>
        <div class="footer-info__helpful">helpful</div>
      </div>
    </div>
  </div>
</template>