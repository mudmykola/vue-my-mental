export default {
	state: () => ({
		questionsAndAnswers: [
			{
				question: "What is your return policy?",
				answer: "Our return policy is 30 days with a full refund.",
			},
			{
				question: "How long does shipping take?",
				answer: "Shipping takes 5-7 business days.",
			},
			{
				question: "Do you ship internationally?",
				answer: "Yes, we ship to over 100 countries worldwide.",
			},
			{
				question: "How can I track my order?",
				answer:
					"You can track your order using the tracking number provided in your confirmation email.",
			},
			{
				question: "What payment methods do you accept?",
				answer: "We accept all major credit cards, PayPal, and Apple Pay.",
			},
			{
				question: "Can I change my order after placing it?",
				answer: "You can change your order within 24 hours of placing it.",
			},
			{
				question: "How do I contact customer service?",
				answer:
					"You can contact us via email at support@example.com or call us at 123-456-7890.",
			},
			{
				question: "Do you offer gift wrapping?",
				answer: "Yes, we offer gift wrapping for an additional fee.",
			},
			{
				question: "What are your business hours?",
				answer: "Our business hours are Monday to Friday, 9 AM to 5 PM.",
			},
			{
				question: "Where are you located?",
				answer: "We are located in New York City, USA.",
			},
		],
	}),
	getters: {
		questionsAndAnswers: (state) => state.questionsAndAnswers,
	},
};