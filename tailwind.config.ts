
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
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
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(20px)" }
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"slide-in": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"pulse-slow": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.7" }
				},
				"spin-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				},
				"bounce-subtle": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" }
				},
				"glow": {
					"0%, 100%": { boxShadow: "0 0 5px 2px var(--glow-color, rgba(79, 70, 229, 0.3))" },
					"50%": { boxShadow: "0 0 20px 5px var(--glow-color, rgba(79, 70, 229, 0.6))" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.7s ease-out forwards",
				"fade-out": "fade-out 0.5s ease-out forwards",
				"scale-in": "scale-in 0.5s ease-out",
				"slide-in": "slide-in 0.5s ease-out",
				"float": "float 4s ease-in-out infinite",
				"pulse-slow": "pulse-slow 3s ease-in-out infinite",
				"spin-slow": "spin-slow 8s linear infinite",
				"bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
				"glow": "glow 2s ease-in-out infinite"
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': "url('/lovable-uploads/45c54c34-93a7-43c3-b2de-2aba4ca60e3e.png')",
				'code-pattern': "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop')",
				'dots-pattern': "radial-gradient(circle, var(--dots-color, rgba(79, 70, 229, 0.1)) 1px, transparent 1px)",
				'mesh-gradient': "linear-gradient(45deg, var(--mesh-start, rgba(79, 70, 229, 0.1)) 0%, var(--mesh-end, rgba(147, 51, 234, 0.1)) 100%)",
			},
			boxShadow: {
				'neon': '0 0 5px theme(colors.accent.DEFAULT), 0 0 20px theme(colors.accent.DEFAULT)',
				'3d': '5px 5px 0px theme(colors.accent.DEFAULT)',
				'inner-glow': 'inset 0 0 10px rgba(79, 70, 229, 0.3)'
			},
			textShadow: {
				'glow': '0 0 10px rgba(79, 70, 229, 0.5)',
			},
			backdropBlur: {
				'xs': '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
