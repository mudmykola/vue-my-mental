import FooterLogoComponent from "@/components/footer/FooterLogoComponent.vue";
import IconLogo from "@/components/icons/IconLogo.vue";
import IconTelegram from "@/components/icons/IconTelegram.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [{ path: "/", component: { template: "<div>Home</div>" } }],
});

describe("FooterLogoComponent.vue", () => {
	let wrapper;

	beforeEach(async () => {
		wrapper = mount(FooterLogoComponent, {
			global: {
				plugins: [router],
				components: {
					IconLogo,
					IconTelegram,
					BaseButton,
				},
			},
		});
		router.push("/");
		await router.isReady();
	});

	it("renders the logo", () => {
		const logo = wrapper.findComponent(IconLogo);
		expect(logo.exists()).toBe(true);
	});

	it("renders the correct mail title", () => {
		const title = wrapper.find("h2");
		expect(title.exists()).toBe(true);
		expect(title.text()).toBe("Психотерапія та ментальне здоров’я");
	});

	it("renders the support email", () => {
		const emailLink = wrapper.find("a[href='mailto:Support@mymental.com.ua']");
		expect(emailLink.exists()).toBe(true);
		expect(emailLink.text()).toBe("Support@mymental.com.ua");
	});

	it("renders the Telegram link", () => {
		const telegramLink = wrapper.find("a[href='/telegram']");
		expect(telegramLink.exists()).toBe(true);
		expect(telegramLink.text()).toContain("Telegram");
	});
});