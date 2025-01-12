
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Inter", "serif"],
			},
			colors: {
				primary: "#FF3811",
				dark1: "#151515",
				dark2: "#444444",
				dark3: "#737373",
				dark4: "#A2A2A2",
				dark6: "#E8E8E8",
				dark7: "#F3F3F3",
				success: "#29B170",
			},
			backgroundColor: {
				primary: "#FF3811",
			},
		},
	},
	plugins: [],
};
