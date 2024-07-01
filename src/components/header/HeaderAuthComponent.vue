<script setup>
import IconUser from "@/components/icons/IconUser.vue";
import { defineProps } from "vue";

const props = defineProps({
	label: {
		type: String,
		required: true,
		default: "Увійти",
	},
});
</script>

<template>
  <div class="auth flex items-center gap-2">
    <IconUser/>
    <h2 class="text-[14px]  text-primary font-bold font-sans">{{ label }}</h2>
  </div>
</template>