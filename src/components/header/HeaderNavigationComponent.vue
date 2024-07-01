<template>
  <div class="header-menu">
    <ul class="flex items-center gap-5">
      <li class="header-menu__item" v-for="item in menuItems" :key="item.title" @mouseenter="showDropdown(item)" @mouseleave="hideDropdown(item)">
        <a class="text-[14px] text-primary font-bold font-sans" :href="item.link">{{ item.title }}</a>
        <span v-if="item.title === 'Спеціалістам'" class="menu-icon ml-1 transition-transform duration-300 ease" :class="{ 'rotate-180': item.isDropdownVisible }">
          <IconAngelDown/>
        </span>
        <ul v-if="item.isDropdownVisible" class="dropdown-menu ">
          <li class="w-full px-4" v-for="subItem in item.submenu" :key="subItem.title">
            <a class="text-[14px] text-primary font-bold font-sans" :href="subItem.link">{{ subItem.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import IconAngelDown from "@/components/icons/IconAngelDown.vue";
import { ref } from "vue";

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

function showDropdown(item) {
	item.isDropdownVisible = true;
}

function hideDropdown(item) {
	item.isDropdownVisible = false;
}
</script>

<style lang="scss" scoped>
.header-menu{
  &__item{
    a{
      position: relative;
    }
    a:nth-child(0)::after {

      height: 0;
    }
    a::after{
      position: absolute;
      content: '';
      width: 0;
      height: 1px;
      left: 0;
      bottom: -1px;
      background-color: #000;
      transition: width 0.3s;
    }
    a:hover::after{
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
  a{
    position: relative;
  }
  a:nth-child(0)::after {

    height: 0;
  }
  a::after{
    position: absolute;
    content: '';
    width: 0;
    height: 1px;
    left: 0;
    bottom: -1px;
    background-color: #000;
    transition: width 0.3s;
  }
  a:hover::after{
    width: 100%;
    transition: width 0.4s;
  }
}

.header-menu li:hover .dropdown-menu {
  display: block;
}
</style>