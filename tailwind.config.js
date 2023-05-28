/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				accent: "#00D870",
			},
			backgroundImage: {
				hero: "url('../assets/images/bg-cubes.svg')",
			},
		},
	},
	plugins: [],
};
