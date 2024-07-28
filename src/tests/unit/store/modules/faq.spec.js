import faq from "@/store/modules/faq";
import { createStore } from "vuex";

describe("FAQ Vuex Module", () => {
	let store;

	beforeEach(() => {
		store = createStore({
			modules: {
				faq: {
					namespaced: true,
					...faq,
				},
			},
		});
	});

	it("should have the correct initial state", () => {
		const state = store.state.faq;
		expect(state.questionsAndAnswers.length).toBeGreaterThan(0); // перевіряємо, що масив не порожній
		expect(state.questionsAndAnswers[0]).toHaveProperty("question");
		expect(state.questionsAndAnswers[0]).toHaveProperty("answer");
	});

	it("getter questionsAndAnswers should return the correct state", () => {
		const questionsAndAnswers = store.getters["faq/questionsAndAnswers"];
		expect(questionsAndAnswers.length).toBeGreaterThan(0); // перевіряємо, що масив не порожній
		expect(questionsAndAnswers[0]).toHaveProperty("question");
		expect(questionsAndAnswers[0]).toHaveProperty("answer");
	});
});