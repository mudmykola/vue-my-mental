import HeaderLogoComponent from "@/components/header/HeaderLogoComponent.vue";
import IconLogo from "@/components/icons/IconLogo.vue";
import { mount } from "@vue/test-utils";

describe("HeaderLogoComponent", () => {
	test("should render correctly", () => {
		const wrapper = mount(HeaderLogoComponent);
		expect(wrapper.element).toMatchSnapshot();
	});

	test('should have a default href value of "/"', () => {
		const wrapper = mount(HeaderLogoComponent);
		const link = wrapper.find("a");
		expect(link.attributes("href")).toBe("/");
	});

	test("should render IconLogo component", () => {
		const wrapper = mount(HeaderLogoComponent);
		expect(wrapper.findComponent(IconLogo).exists()).toBe(true);
	});

	test("should update logoUrl when updateLogoUrl is called", async () => {
		const wrapper = mount(HeaderLogoComponent);
		const newUrl = "/new-url";

		wrapper.vm.updateLogoUrl(newUrl);

		await wrapper.vm.$nextTick();

		const link = wrapper.find("a");
		expect(link.attributes("href")).toBe(newUrl);
	});
});