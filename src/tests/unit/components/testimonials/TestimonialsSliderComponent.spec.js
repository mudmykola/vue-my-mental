import TestimonialsSliderComponent from "@/components/testimonials/TestimonialsSliderComponent.vue";
import { mount } from "@vue/test-utils";

describe("TestimonialsSliderComponent", () => {
	it("renders correctly", () => {
		const wrapper = mount(TestimonialsSliderComponent);
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.element).toMatchSnapshot();
	});
});