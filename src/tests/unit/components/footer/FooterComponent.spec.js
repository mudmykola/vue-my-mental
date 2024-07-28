import FooterComponent from "@/components/footer/FooterComponent.vue";
import FooterHelpfulComponent from "@/components/footer/FooterHelpfulComponent.vue";
import FooterLegalComponent from "@/components/footer/FooterLegalComponent.vue";
import FooterLogoComponent from "@/components/footer/FooterLogoComponent.vue";
import FooterMenuComponent from "@/components/footer/FooterMenuComponent.vue";
import ScrollTopBtnComponent from "@/components/footer/ScrollTopBtnComponent.vue";
import { mount } from "@vue/test-utils";

const routerLinkStub = {
	template: "<a><slot /></a>",
};

describe("FooterComponent.vue", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(FooterComponent, {
			global: {
				components: {
					FooterHelpfulComponent,
					FooterLegalComponent,
					FooterLogoComponent,
					FooterMenuComponent,
					ScrollTopBtnComponent,
					"router-link": routerLinkStub,
				},
			},
		});
	});

	it("renders correctly", () => {
		expect(wrapper.exists()).toBe(true);
	});

	it("should render FooterLogoComponent", () => {
		const footerLogo = wrapper.findComponent(FooterLogoComponent);
		expect(footerLogo.exists()).toBe(true);
	});

	it("should render FooterMenuComponent", () => {
		const footerMenu = wrapper.findComponent(FooterMenuComponent);
		expect(footerMenu.exists()).toBe(true);
	});

	it("should render FooterLegalComponent", () => {
		const footerLegal = wrapper.findComponent(FooterLegalComponent);
		expect(footerLegal.exists()).toBe(true);
	});

	it("should render FooterHelpfulComponent", () => {
		const footerHelpful = wrapper.findComponent(FooterHelpfulComponent);
		expect(footerHelpful.exists()).toBe(true);
	});

	it("should render ScrollTopBtnComponent", () => {
		const scrollTopBtn = wrapper.findComponent(ScrollTopBtnComponent);
		expect(scrollTopBtn.exists()).toBe(true);
	});

	it("should display the current year in the footer copy", () => {
		const currentYear = new Date().getFullYear();
		const footerCopy = wrapper.find(".footer-copy h2");
		expect(footerCopy.text()).toContain(
			`© ${currentYear} MyMental. Всі права захищені.`,
		);
	});
});