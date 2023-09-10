/* eslint-env node */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#8062DA",
				secondary: "#4BB8E2",
				warning: "#EFB657",
				info: "#5FB8F2",
				danger: "#DB5443",
				succes: "#4EBE95",
				secondaryText: "#a86e3b",
			},
		},
		fontFamily: {
			sans: ["Roboto Condensed", "sans"],
			serif: ["Cinzel", "serif"],
			roboto: ["roboto", "sans-serif"],
			cinzel: ["Cinzel", "serif"],
			condensed: ["Roboto Condensed'", "sans-serif"],
		},
	},
	plugins: [],
};
