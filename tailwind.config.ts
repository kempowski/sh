import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#02542D',
				accent: '#2ecc71',
				custom: {
				  light: '#f7fafc',
				  dark: '#2d3748'
				}
			}
		}
	},

	plugins: [typography, containerQueries]
} satisfies Config;
