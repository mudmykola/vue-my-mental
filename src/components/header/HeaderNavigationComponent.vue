<script setup>
import { reactive } from 'vue';

const menuItems = reactive([
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
      { title: 'Пункт 1', link: '/specialists/item1' },
      { title: 'Пункт 2', link: '/specialists/item2' },
      { title: 'Пункт 3', link: '/specialists/item3' },
    ],
  },
]);

const toggleDropdown = (item) => {
  item.isDropdownVisible = !item.isDropdownVisible;
};
</script>

<template>
  <div class="header-menu">
    <ul>
      <li v-for="item in menuItems" :key="item.title" @click="toggleDropdown(item)" @mouseleave="item.isDropdownVisible = false">
        <a :href="item.link">{{ item.title }}</a>
        <ul v-if="item.submenu && item.isDropdownVisible" class="dropdown-menu">
          <li v-for="subItem in item.submenu" :key="subItem.title">
            <a :href="subItem.link">{{ subItem.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>