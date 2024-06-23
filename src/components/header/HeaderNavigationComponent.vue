<template>
  <div class="header-menu">
    <ul class="flex items-center gap-5">
      <li v-for="item in menuItems" :key="item.title" @mouseenter="showDropdown(item)" @mouseleave="hideDropdown(item)">
        <a :href="item.link">{{ item.title }}</a>
        <span v-if="item.title === 'Спеціалістам'" class="menu-icon" :class="{ 'rotate-180': item.isDropdownVisible }">
          <IconAngelDown/>
</span>
        <ul v-if="item.isDropdownVisible" class="dropdown-menu ">
          <li class="w-full px-4" v-for="subItem in item.submenu" :key="subItem.title">
            <a :href="subItem.link">{{ subItem.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import IconAngelDown from "@/components/icons/IconAngelDown.vue";

const menuItems = ref([
  {
    title: 'Про нас',
    link: '/about',
    isDropdownVisible: false,
  },
  {
    title: 'Наші фахівці',
    link: '/experts',
    isDropdownVisible: false,
  },
  {
    title: 'Спеціалістам',
    link: '/specialists',
    isDropdownVisible: false,
    submenu: [
      {
        title: 'Медицина',
        link: '/specialists/medicine',
      },
      {
        title: 'Техніка',
        link: '/specialists/tech',
      },
      {
        title: 'Право',
        link: '/specialists/law',
      }
    ],
  }
]);

function showDropdown(item) {
  item.isDropdownVisible = true;
}

function hideDropdown(item) {
  item.isDropdownVisible = false;
}
</script>

<style scoped>
.menu-icon {
  margin-left: 4px;
  transition: transform 0.3s ease;
  display: inline-block;
}

.rotate-180 {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  background-color: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  z-index: 1000;
  display: none;
}

.header-menu li:hover .dropdown-menu {
  display: block;
}
</style>