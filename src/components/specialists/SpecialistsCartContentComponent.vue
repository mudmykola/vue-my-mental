<script setup>
import specialistsContImage from "/images/specialists-cont-image.png";

const props = defineProps({
	altText: {
		type: String,
		required: true,
		default: "Hero Image",
	},
});

const specialistCartText =
	"Пройшли тривале\n" +
	"фундаментальне навчання\n" +
	"в одному або більше\n" +
	"психотерапевтичних методів";
</script>

<template>
  <div class="specialists-cart__content  shadow-2xl p-8 rounded-xl hover:bg-muted hover:transition duration-300 cursor-pointer">
    <img :alt="altText" :src="specialistsContImage" />
    <p class="pt-8 w-[225px] text-[16px] text-text">{{ specialistCartText }}</p>
  </div>
</template>