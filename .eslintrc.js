module.exports = {
	parser: "babel-eslint",
	plugins: [
		'eslint-plugin-babel',
		'eslint-plugin-node',
	],
	extends: [
		'eslint-config-airbnb',
	],
	rules: {
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'no-plusplus': 'off',
		'no-unused-vars': 'warn',
		'no-shadow': 'warn',
		'prefer-const': 'warn',
		'comma-dangle': ['error', {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "never",
		}],
	},
};
