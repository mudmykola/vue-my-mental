import HeaderNavigationComponent from "@/components/header/HeaderNavigationComponent.vue";
import { mount } from "@vue/test-utils";

describe("HeaderNavigationComponent.vue", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(HeaderNavigationComponent);
	});

	it("renders correctly", () => {
		expect(wrapper.element).toMatchSnapshot();
	});

	it("should have dropdown menu element", async () => {
		const specialistMenuItem = wrapper.findAll(".header-menu__item").at(2);

		await specialistMenuItem.trigger("mouseenter");

		const dropdownMenu = specialistMenuItem.find(".dropdown-menu");
		expect(dropdownMenu.exists()).toBe(true);

		expect(dropdownMenu.isVisible()).toBe(true);
	});
});