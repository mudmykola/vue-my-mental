import ExpertsView from "@/views/ExpertsView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomeView.vue";
import TestPage from "../views/TestsView.vue";

const BASE_URL = "mental.com";

const router = createRouter({
	history: createWebHistory(BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
			meta: {
				breadcrumbs: ["Головна"],
			},
		},
		{
			path: "/experts",
			name: "expert",
			component: ExpertsView,
			meta: {
				breadcrumbs: ["Наші фахівці"],
			},
		},
		{
			path: "/tests",
			name: "tests",
			component: TestPage,
			meta: {
				breadcrumbs: ["Наші фахівці"],
			},
		},
	],
});

export default router;