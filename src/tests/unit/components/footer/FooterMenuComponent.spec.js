import FooterMenuComponent from "@/components/footer/FooterMenuComponent.vue";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [{ path: "/", component: { template: "<div>Home</div>" } }],
});

describe("FooterMenuComponent.vue", () => {
	let wrapper;

	beforeEach(async () => {
		wrapper = mount(FooterMenuComponent, {
			global: {
				plugins: [router],
			},
		});
		router.push("/");
		await router.isReady();
	});

	it("renders the menu title", () => {
		const title = wrapper.find("h2");
		expect(title.exists()).toBe(true);
		expect(title.text()).toBe("Навігація");
	});

	it("renders the correct menu items", () => {
		const menuItems = ["Про нас", "Всі фахівці", "Психотерапевтам"];
		const listItems = wrapper.findAll("li");

		expect(listItems).toHaveLength(menuItems.length);
		listItems.forEach((item, index) => {
			expect(item.text()).toBe(menuItems[index]);
		});
	});
});