import { defineProps } from "vue";

export const commonProps = {
	countBeforeBanner: {
		type: Number,
		default: 0,
	},
	countAfterBanner: {
		type: Number,
		default: 0,
	},
};