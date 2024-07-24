<script setup>
import { ref } from "vue";

const menuItems = ref([
	{ text: "Про нас", link: "/" },
	{ text: "Всі фахівці", link: "/" },
	{ text: "Психотерапевтам", link: "/" },
]);

const menuTitle = ref("Навігація");
</script>

<template>
  <div class="footer-menu">
    <div class="footer-menu__inner">
      <h2 class="text-[16px] font-bold">{{ menuTitle }}</h2>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link
            :to="item.link"
            class="footer-menu__link text-[14px] text-primary font-bold font-sans"
            >{{ item.text }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.footer-menu__link {
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