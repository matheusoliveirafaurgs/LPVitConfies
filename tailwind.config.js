/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta do manual da marca Vitora
        preto: "rgb(var(--vt-preto) / <alpha-value>)",
        branco: "rgb(var(--vt-branco) / <alpha-value>)",
        "azul-escuro": "rgb(var(--vt-azul-escuro) / <alpha-value>)",
        "azul-medio": "rgb(var(--vt-azul-medio) / <alpha-value>)",
        "azul-claro": "rgb(var(--vt-azul-claro) / <alpha-value>)",
        "fundo-chat": "rgb(var(--vt-fundo-chat) / <alpha-value>)",
        "fundo-rodape": "rgb(var(--vt-fundo-rodape) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--vt-fonte)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        medium: "500",
        semibold: "600",
        extrabold: "800",
      },
      maxWidth: {
        conteudo: "76rem",
      },
    },
  },
  plugins: [],
};
