<script setup>
import { ref } from "vue";

const helpfulTitle = ref("Корисна інформація");

const helpfulMenu = ref([
	{
		link: "tel:0800505201",
		text: "0 800 505 201 - Гаряча лінія МОЗ",
	},
	{
		link: "tel:0800602019",
		text: "0 800 60 20 19 - Контакт-центр МОЗ",
	},
	{
		link: "moz.gov.ua",
		text: "moz.gov.ua",
	},
	{
		text:
			"7333 - Цілодобова гаряча лінія з попередження суїцидів та психологічної підтримки Lifeline Ukraine\n" +
			"для ветеранів",
	},
	{
		link: "tel:0800501701",
		text: "0–800–501–701 - Всеукраїнський телефон довіри",
	},
]);
</script>

<template>
  <div class="footer-helpful">
    <div class="footer-helpful__inner flex flex-col gap-6">
      <h2 class="text-[16px] font-bold">{{ helpfulTitle }}</h2>
      <ul class="flex flex-col gap-6">
        <li
          v-for="(item, index) in helpfulMenu"
          :key="index"
          class="flex flex-col gap-6"
        >
          <a
            :href="item.link"
            class="footer-helpful__link text-[14px] text-primary font-normal font-sans"
            >{{ item.text }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>