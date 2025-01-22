import { Config } from "tailwindCSS";

export default {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  primary: {
			DEFAULT: '#A31D1D', 
			foreground: 'color: black;', 
		  },
		  background: '#A31D1D', 
		  foreground: '#ffffff',  
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  } satisfies Config;
  