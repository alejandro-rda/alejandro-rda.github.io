/** @type {import('tailwindcss').Config} */
function withOpacity(varName) {
  return `rgb(var(${varName}) / <alpha-value>)`;
}

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: withOpacity('--color-base'),
        surface: {
          DEFAULT: withOpacity('--color-surface'),
          light: withOpacity('--color-surface-light'),
        },
        accent: {
          DEFAULT: withOpacity('--color-accent'),
          alt: withOpacity('--color-accent-alt'),
        },
        text: {
          DEFAULT: withOpacity('--color-text'),
          muted: withOpacity('--color-text-muted'),
        },
        border: withOpacity('--color-border'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
