import FooterHelpfulComponent from "@/components/footer/FooterHelpfulComponent.vue";
import { mount } from "@vue/test-utils";

describe("FooterHelpfulComponent.vue", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(FooterHelpfulComponent);
	});

	it("renders correctly", () => {
		expect(wrapper.element).toMatchSnapshot();
	});

	it("displays the correct title", () => {
		const title = wrapper.find("h2");
		expect(title.text()).toBe("Корисна інформація");
	});

	it("displays the correct number of menu items", () => {
		const menuItems = wrapper.findAll("li");
		expect(menuItems.length).toBe(5);
	});

	it("displays the correct menu item texts", () => {
		const menuItems = wrapper.findAll("a");
		const expectedTexts = [
			"0 800 505 201 - Гаряча лінія МОЗ",
			"0 800 60 20 19 - Контакт-центр МОЗ",
			"moz.gov.ua",
			"7333 - Цілодобова гаряча лінія з попередження суїцидів та психологічної підтримки Lifeline Ukraine для ветеранів",
			"0–800–501–701 - Всеукраїнський телефон довіри",
		];

		menuItems.forEach((item, index) => {
			expect(item.text().replace(/\n\s*/g, " ")).toBe(expectedTexts[index]);
		});
	});

	it("displays the correct menu item links", () => {
		const menuItems = wrapper.findAll("a");
		const expectedLinks = [
			"tel:0800505201",
			"tel:0800602019",
			"moz.gov.ua",
			undefined,
			"tel:0800501701",
		];

		menuItems.forEach((item, index) => {
			expect(item.attributes("href")).toBe(expectedLinks[index]);
		});
	});
});