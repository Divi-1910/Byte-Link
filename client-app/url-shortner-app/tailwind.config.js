/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				banner: "url('./src/assets/bg.jpg')",
			},
			animation: {
				blob: "blob 7s infinite",
				floating: "floating 6s ease-in-out infinite",
				bounceIn: "bounceIn 1s ease forwards",
				fadeIn: "fadeIn 2s ease-in forwards",
				pulse: "pulse 3s infinite",
				spin: "spin 4s linear infinite",
				gradient: "gradient 5s ease infinite",
			},
			keyframes: {
				blob: {
					"0%, 100%": {transform: "translate(0, 0) scale(1)"},
					"33%": {transform: "translate(30px, -50px) scale(1.1)"},
					"66%": {transform: "translate(-20px, 20px) scale(0.9)"},
				},
				floating: {
					"0%, 100%": {transform: "translateY(0)"},
					"50%": {transform: "translateY(-20px)"},
				},
				bounceIn: {
					"0%": {transform: "scale(0.5)", opacity: 0},
					"100%": {transform: "scale(1)", opacity: 1},
				},
				fadeIn: {
					"0%": {opacity: 0},
					"100%": {opacity: 1},
				},
				pulse: {
					"0%, 100%": {opacity: 1},
					"50%": {opacity: 0.5},
				},
				spin: {
					"0%": {transform: "rotate(0deg)"},
					"100%": {transform: "rotate(360deg)"},
				},
				gradient: {
					"0%, 100%": {backgroundPosition: "0% 50%"},
					"50%": {backgroundPosition: "100% 50%"},
				},
			},
		},
	},
	plugins: [],
};
