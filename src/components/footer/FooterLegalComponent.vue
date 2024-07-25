<script setup>
import { ref } from "vue";

const footerMenuLegal = ref([
	{ text: "Дисклеймер ", link: "/" },
	{ text: "Політика використання ", link: "/" },
	{ text: "Ліцензійна угода Умови ", link: "/" },
	{ text: "Умови та положення ", link: "/" },
	{ text: "Політика конфіденційності ", link: "/" },
	{ text: "Договір публічної оферти  ", link: "/" },
	{ text: "Угода користувача ", link: "/" },
]);
const footerLegalTitle = ref("Юридична інформація");
</script>

<template>
  <div class="footer-legal">
    <div class="footer-legal__inner flex flex-col gap-6">
      <h2 class="text-[16px] font-bold">{{ footerLegalTitle }}</h2>
      <ul class="flex flex-col gap-6">
        <li v-for="(item, index) in footerMenuLegal" :key="index" class="flex flex-col gap-6">
          <router-link :to="item.link" class="footer-legal__link w-max text-[14px] text-primary font-normal font-sans ">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-legal__link {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 1px;
    left: 0;
    bottom: -1px;
    background-color: #000;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
    transition: width 0.4s;
  }
}
</style>