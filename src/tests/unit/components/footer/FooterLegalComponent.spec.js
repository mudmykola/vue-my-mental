import FooterLegalComponent from "@/components/footer/FooterLegalComponent.vue";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [{ path: "/", component: { template: "<div>Home</div>" } }],
});

describe("FooterLegalComponent.vue", () => {
	let wrapper;

	beforeEach(async () => {
		wrapper = mount(FooterLegalComponent, {
			global: {
				plugins: [router],
			},
		});
		router.push("/");
		await router.isReady();
	});

	it("renders the correct title", () => {
		const title = wrapper.find("h2");
		expect(title.exists()).toBe(true);
		expect(title.text()).toBe("Юридична інформація");
	});

	it("renders the correct menu items", () => {
		const menuItems = [
			"Дисклеймер",
			"Політика використання",
			"Ліцензійна угода Умови",
			"Умови та положення",
			"Політика конфіденційності",
			"Договір публічної оферти",
			"Угода користувача",
		];
		const listItems = wrapper.findAll("li");

		expect(listItems).toHaveLength(menuItems.length);
		listItems.forEach((item, index) => {
			expect(item.text().trim()).toContain(menuItems[index]);
		});
	});
});