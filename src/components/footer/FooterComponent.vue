<script setup>
import FooterHelpfulComponent from "@/components/footer/FooterHelpfulComponent.vue";
import FooterLegalComponent from "@/components/footer/FooterLegalComponent.vue";
import FooterLogoComponent from "@/components/footer/FooterLogoComponent.vue";
import FooterMenuComponent from "@/components/footer/FooterMenuComponent.vue";
import ScrollTopBtnComponent from "@/components/footer/ScrollTopBtnComponent.vue";
import { ref } from "vue";
const currentYear = new Date().getFullYear();
const footerCopy = ref(`© ${currentYear} MyMental. Всі права захищені.`);
</script>

<template>
  <div class="footer-inner bg-secondaryWhite  py-10">
    <div class="container">
      <div class="footer-inner__box grid grid-cols-4">
        <div class="footer-info__logo">
          <FooterLogoComponent />
        </div>
        <div class="footer-info__menu">
          <FooterMenuComponent />
        </div>
        <div class="footer-info__legal">
          <FooterLegalComponent />
        </div>
        <div class="footer-info__helpful">
          <FooterHelpfulComponent />
        </div>
        <div class="btn-scroll__top">
          <ScrollTopBtnComponent />
        </div>
      </div>
      <div class="footer-copy mt-14">
        <h2 class="text-[13px] text-secondary">{{ footerCopy }}</h2>
      </div>
    </div>
  </div>
</template>