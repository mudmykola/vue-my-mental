import axios from "axios";
import { createStore } from "vuex";

export default createStore({
	state: {
		followers: [],
		showAllFollowers: false,
	},
	mutations: {
		SET_FOLLOWERS(state, followers) {
			state.followers = followers;
		},
		TOGGLE_SHOW_ALL_FOLLOWERS(state) {
			state.showAllFollowers = !state.showAllFollowers;
		},
	},
	actions: {
		async fetchFollowers({ commit }) {
			try {
				const response = await axios.get(
					"https://randomuser.me/api/?results=50",
				);
				commit("SET_FOLLOWERS", response.data.results);
			} catch (error) {
				console.error(error);
			}
		},
	},
	getters: {
		initialFollowers: (state) => state.followers.slice(0, 5),
		remainingFollowerCount: (state) => state.followers.length - 5,
		allFollowers: (state) => state.followers,
		showAllFollowers: (state) => state.showAllFollowers,
	},
});