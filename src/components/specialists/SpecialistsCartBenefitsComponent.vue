<script setup>
import IconMessage from "@/components/icons/IconMessage.vue";
import IconScience from "@/components/icons/IconScience.vue";
import IconTeam from "@/components/icons/IconTeam.vue";
import IconTechnology from "@/components/icons/IconTechnology.vue";
import { ref } from "vue";

const benefits = ref([
	{ text: "Перевірені експерти", icon: IconMessage },
	{
		text: "Мають власний досвід проходження довгострокової індивідуальної психотерапії",
		icon: IconTeam,
	},
	{
		text: "Всі спеціалісти мають вищу психологічну або медичну освіту",
		icon: IconTechnology,
	},
	{
		text: "Регулярно проходять супервізію\n" + "для підвищення кваліфікації",
		icon: IconScience,
	},
]);
</script>

<template>
  <div class="specialists-cart__benefit--list">
    <ul class="flex gap-4 w-[800px] flex-wrap">
      <li
        v-for="(benefit, index) in benefits"
        :key="index"
        class="bg-white rounded-xl shadow-2xl w-[379px] mb-4 hover:bg-muted hover:transition duration-300 cursor-pointer"
      >
        <div class="specialists-cart__benefit--box py-8 px-8">
          <component :is="benefit.icon" />
          <p class="mt-6 text-[16px] text-text">{{ benefit.text }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>