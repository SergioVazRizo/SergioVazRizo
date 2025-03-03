/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class', // Habilitar modo oscuro basado en clase
  theme: {
    extend: {
      colors: {
        // Modo claro (por defecto)
        text: "hsl(189, 87%, 97%)",
        background: "hsl(0, 0%, 0%)",
        primary: "hsl(216, 82%, 27%)",
        secondary: "hsl(246, 82%, 13%)",
        accent: "hsl(246, 82%, 53%)",
        // Modo oscuro (añadido)
        dark: {
          text: "hsl(0, 0%, 0%)",
          background: "hsl(220, 13%, 18%)",
          primary: "hsl(216, 82%, 65%)",
          secondary: "hsl(246, 82%, 75%)",
          accent: "hsl(246, 82%, 65%)"
        }
      },
    },
  },
  plugins: [],
};