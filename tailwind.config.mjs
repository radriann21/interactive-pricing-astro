/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					'soft-cyan': 'hsl(174, 77%, 80%)',
					'strong-cyan': 'hsl(174, 86%, 45%)',
					'light-grayish-red': 'hsl(14, 92%, 95%)',
					'light-red': 'hsl(15, 100%, 70%)',
					'pale-blue': 'hsl(226, 100%, 87%)'
				},
				neutral: {
					'very-pale-blue': 'hsl(230, 100%, 99%)',
					'light-grayish-blue': 'hsl(224, 65%, 95%)',
					'light-grayish-blue-2': 'hsl(223, 50%, 87%)',
					'grayish-blue': 'hsl(225, 20%, 60%)',
					'dark-desaturated-blue': 'hsl(227, 35%, 25%)'
				}
			},
			fontFamily: {
				'global': ['Manrope']
			},
			backgroundImage: {
				'circles-pattern': 'url("/src/assets/pattern-circles.svg")'
			}
		},
	},
	plugins: [],
}
