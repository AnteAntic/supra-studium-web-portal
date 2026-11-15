import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			// Direction A: one layout axis. Content width = 72rem (max-w-shell).
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1200px'
			}
		},
		extend: {
			// Direction A type scale (docs/PLAN-smjer-A-klinicki-casopis.md, D3)
			fontSize: {
				label: ['0.6875rem', { lineHeight: '1.4' }],
				caption: ['0.8125rem', { lineHeight: '1.5' }],
				'body-s': ['0.875rem', { lineHeight: '1.6' }],
				body: ['clamp(0.9375rem, 0.91rem + 0.12vw, 1rem)', { lineHeight: '1.7' }],
				'body-l': ['clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)', { lineHeight: '1.7' }],
				quote: ['clamp(1.375rem, 1.05rem + 1.25vw, 2rem)', { lineHeight: '1.38' }],
				h3: ['clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)', { lineHeight: '1.25' }],
				h2: ['clamp(1.75rem, 1.2rem + 2.2vw, 3rem)', { lineHeight: '1.12' }],
				display: ['clamp(2.125rem, 1.2rem + 3.2vw, 3.5rem)', { lineHeight: '1.1' }]
			},
			maxWidth: {
				shell: '72rem'
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Supra Studium brand colors
				supra: {
					golden: 'hsl(var(--supra-golden))',
					black: 'hsl(var(--supra-black))',
					navy: 'hsl(var(--supra-navy))',
					ivory: 'hsl(var(--supra-ivory))',
					gray: 'hsl(var(--supra-gray))',
					blue: 'hsl(var(--supra-blue))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
} satisfies Config;
