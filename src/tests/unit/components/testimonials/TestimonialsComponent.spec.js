import TestimonialsComponent from "@/components/testimonials/TestimonialsComponent.vue";
import TestimonialsSliderComponent from "@/components/testimonials/TestimonialsSliderComponent.vue";
import { mount } from "@vue/test-utils";

describe("TestimonialsComponent.vue", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(TestimonialsComponent, {
			global: {
				stubs: {
					TestimonialsSliderComponent: true,
				},
			},
		});
	});

	it("renders correctly", () => {
		expect(wrapper.exists()).toBe(true);
	});

	it("renders the correct title", () => {
		const title = wrapper.find("h2");
		expect(title.text()).toBe("Відгуки про Mymental");
	});

	it("renders the TestimonialsSliderComponent", () => {
		const sliderComponent = wrapper.findComponent(TestimonialsSliderComponent);
		expect(sliderComponent.exists()).toBe(true);
	});
});