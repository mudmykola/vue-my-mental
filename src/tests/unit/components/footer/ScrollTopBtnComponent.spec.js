import ScrollTopBtnComponent from "@/components/footer/ScrollTopBtnComponent.vue";
import IconArrowToTop from "@/components/icons/IconArrowToTop.vue";
import { mount } from "@vue/test-utils";

describe("ScrollTopBtnComponent.vue", () => {
	let wrapper;

	beforeEach(() => {
		global.scrollTo = jest.fn();

		wrapper = mount(ScrollTopBtnComponent, {
			global: {
				components: {
					IconArrowToTop,
				},
			},
		});
	});

	it("button is not visible initially", () => {
		expect(wrapper.find("button").exists()).toBe(false);
	});

	it("button becomes visible after scrolling", async () => {
		window.scrollY = 301;
		window.dispatchEvent(new Event("scroll"));
		await wrapper.vm.$nextTick();

		expect(wrapper.find("button").exists()).toBe(true);
	});

	it("scrolls to top when button is clicked", async () => {
		window.scrollY = 301;
		window.dispatchEvent(new Event("scroll"));
		await wrapper.vm.$nextTick();

		const button = wrapper.find("button");
		await button.trigger("click");

		expect(global.scrollTo).toHaveBeenCalledWith({
			top: 0,
			behavior: "smooth",
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
});