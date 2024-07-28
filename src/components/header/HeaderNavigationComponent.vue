<script setup>
import IconAngelDown from "@/components/icons/IconAngelDown.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const menuItems = ref([
	{
		title: "Про нас",
		link: "/about",
		isDropdownVisible: false,
	},
	{
		title: "Наші фахівці",
		link: "/experts",
		isDropdownVisible: false,
	},
	{
		title: "Спеціалістам",
		link: "/specialists",
		isDropdownVisible: false,
		submenu: [
			{
				title: "Медицина",
				link: "/specialists/medicine",
			},
			{
				title: "Техніка",
				link: "/specialists/tech",
			},
			{
				title: "Право",
				link: "/specialists/law",
			},
		],
	},
]);

const route = useRoute();

function showDropdown(item) {
	item.isDropdownVisible = true;
}

function hideDropdown(item) {
	item.isDropdownVisible = false;
}

function isActive(link) {
	return route.path === link;
}
</script>

<template>
  <div class="header-menu">
    <ul class="flex items-center gap-5">
      <li
        v-for="item in menuItems"
        :key="item.title"
        class="header-menu__item"
        @mouseenter="showDropdown(item)"
        @mouseleave="hideDropdown(item)"
      >
        <a
          :class="{ active: isActive(item.link) }"
          :href="item.link"
          class="text-[14px] text-primary font-bold font-sans"
        >
          {{ item.title }}
        </a>
        <span
          v-if="item.title === 'Спеціалістам'"
          :class="{ 'rotate-180': item.isDropdownVisible }"
          class="menu-icon ml-1 transition-transform duration-300 ease"
        >
          <IconAngelDown />
        </span>
        <ul v-if="item.isDropdownVisible" class="dropdown-menu">
          <li
            v-for="subItem in item.submenu"
            :key="subItem.title"
            class="w-full px-4"
          >
            <a
              :class="{ active: isActive(subItem.link) }"
              :href="subItem.link"
              class="text-[14px] text-primary font-bold font-sans"
            >
              {{ subItem.title }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header-menu {
  &__item {
    a {
      position: relative;
    }
    a::after {
      position: absolute;
      content: "";
      width: 0;
      height: 1px;
      left: 0;
      bottom: -1px;
      background-color: #000;
      transition: width 0.3s;
    }
    a:hover::after,
    a.active::after {
      width: 100%;
      transition: width 0.4s;
    }
  }
}
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