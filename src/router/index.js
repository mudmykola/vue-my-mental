import ExpertsView from "@/views/ExpertsView.vue";
// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomeView.vue";

const BASE_URL = "mental.com";

const router = createRouter({
	history: createWebHistory(BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
			meta: { title: "Home Page" },
		},
		{
			path: "/experts",
			name: "expert",
			component: ExpertsView,
			meta: { title: "Experts Page" },
		},
	],
});

export default router;