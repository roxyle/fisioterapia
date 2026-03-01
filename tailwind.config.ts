import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern1': "url('/fisio6.jpg')",
        'hero-pattern2': "url('/fisio8.jpg')",
        'terapie-pattern':"url('/Fisio1921.jpg')",
        'terapie-strum-pattern':"url('/Fisiok6.jpg')",

      },
      // backgroundPosition: {
      //   'custom': '35% 50%', 
      // },
      colors: {
        
        background: "var(--background)",
        foreground: "var(--foreground)",

        sky: {
            50:  '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },

          brand: {
            DEFAULT:'#0ea5e9',
            dark:'#0284c7',
            darker:'#0369a1',
            light:'#e0f2fe',
            pale: '#f0f9ff',
          },
      },

      fontFamily: {
        sans:['var(--font-inter)','system-ui','sans-serif'],
        display:['var(--font-playfair)','Georgia','serif'],
      },

      fontSize: {
        'display-xl': ['clamp(2rem, 5.5vw, 4.5rem)', { lineHeight: '1.1' }],
        'display-lg': ['clamp(1.75rem, 4vw, 3.5rem)', { lineHeight: '1.15' }],
        'display-md': ['clamp(1.375rem, 2.5vw, 2.5rem)', { lineHeight: '1.2' }],
      },

      spacing: {
        'section': '5rem',
        'section-sm': '3rem',
      },

      borderRadius: {
        'xl':  '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      boxShadow: {
        'card':'0 2px 16px rgba(0,0,0,0.07)',
        'card-lg':'0 4px 32px rgba(0,0,0,0.10)',
        'sky':'0 4px 20px rgba(14,165,233,0.30)',
      },

      keyframes: {
        fadeUp: {

          '0%': {
            opacity: '0',
            transform: 'translateY(18px)'
          },

          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }

        },

        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }

      },

      animation: {
        'fade-up':'fadeUp 0.5s ease both',
        'fade-up-slow':'fadeUp 0.6s ease 0.15s both',
        'fade-in':'fadeIn 0.4s ease both',
      },

    },
  },
  plugins: [],
}

export default config