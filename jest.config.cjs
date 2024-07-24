module.exports = {
	preset: "@vue/cli-plugin-unit-jest",
	testMatch: ["**/tests/unit/**/*.spec.[jt]s?(x)"],
	moduleFileExtensions: ["js", "json", "vue"],
	transform: {
		"^.+\\.vue$": "vue-jest",
		"^.+\\.js$": "babel-jest",
		"^.+\\.ts$": "babel-jest",
	},
	transformIgnorePatterns: ["/node_modules/"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
	},
	snapshotSerializers: ["jest-serializer-vue"],
};