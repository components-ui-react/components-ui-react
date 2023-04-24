module.exports = {
	env: { browser: true, es2021: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended"
	],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: ["./tsconfig.json"]
			}
		}
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json"
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		"react/react-in-jsx-scope": "off"
	},
	settings: {
		react: {
			version: "detect"
		}
	}
};
