/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "principal": "#3498db",
        "fondo": "#f5f5f5",
        "acento": "#2ecc71",
        "texto": "#333333",
        "alertas": "#e74c3c",
        "realce": "#f39c12",
        "btn-fondo": "#ffffff",
        "navegación": "#2c3e50",
      },
    },
  },
  plugins: [],
};
