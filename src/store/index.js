import { createStore } from "vuex";
import faq from "./modules/faq.js";
import followers from "./modules/followers.js";

export default createStore({
	modules: {
		followers,
		faq,
	},
});