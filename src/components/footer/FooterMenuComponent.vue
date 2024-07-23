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
          <router-link :to="item.link">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>