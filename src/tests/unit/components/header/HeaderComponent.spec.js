import HeaderAuthComponent from "@/components/header/HeaderAuthComponent.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import HeaderLogo from "@/components/header/HeaderLogoComponent.vue";
import HeaderNavigation from "@/components/header/HeaderNavigationComponent.vue";
import HeaderTherapistButtonComponent from "@/components/header/HeaderTherapistButtonComponent.vue";
import { mount } from "@vue/test-utils";

describe("HeaderComponent", () => {
	test("should render correctly", () => {
		const wrapper = mount(HeaderComponent);
		expect(wrapper.element).toMatchSnapshot();
	});

	test("should render HeaderLogo", () => {
		const wrapper = mount(HeaderComponent);
		expect(wrapper.findComponent(HeaderLogo).exists()).toBe(true);
	});

	test("should render HeaderNavigation", () => {
		const wrapper = mount(HeaderComponent);
		expect(wrapper.findComponent(HeaderNavigation).exists()).toBe(true);
	});

	test("should render HeaderAuthComponent", () => {
		const wrapper = mount(HeaderComponent);
		expect(wrapper.findComponent(HeaderAuthComponent).exists()).toBe(true);
	});

	test("should render HeaderTherapistButtonComponent", () => {
		const wrapper = mount(HeaderComponent);
		expect(wrapper.findComponent(HeaderTherapistButtonComponent).exists()).toBe(
			true,
		);
	});

	test("should pass correct props to HeaderAuthComponent", () => {
		const wrapper = mount(HeaderComponent);
		const authComponent = wrapper.findComponent(HeaderAuthComponent);
		expect(authComponent.props().label).toBe("Увійти");
	});

	test("should pass correct props to HeaderTherapistButtonComponent", () => {
		const wrapper = mount(HeaderComponent);
		const buttonComponent = wrapper.findComponent(
			HeaderTherapistButtonComponent,
		);
		expect(buttonComponent.props().btnText).toBe("Підібрати психотерапевта");
		expect(buttonComponent.props().btnUrl).toBe("/find-therapist");
	});

	test("should trigger event when HeaderAuthComponent is clicked", async () => {
		const wrapper = mount(HeaderComponent);
		const authComponent = wrapper.findComponent(HeaderAuthComponent);
		await authComponent.trigger("click");
	});

	test("should trigger event when HeaderTherapistButtonComponent is clicked", async () => {
		const wrapper = mount(HeaderComponent);
		const buttonComponent = wrapper.findComponent(
			HeaderTherapistButtonComponent,
		);
		await buttonComponent.trigger("click");
	});
});