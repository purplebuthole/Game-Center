module.exports = {
  purge: {
    mode: "all",
    content: [
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./src/**/*.css",
      "./index.html",
      "./src/**/*.html",
      "./style/**/*.css",
    ],
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
