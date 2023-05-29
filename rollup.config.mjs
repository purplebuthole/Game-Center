import { terser } from "rollup-plugin-terser";

export default {
  input: "src/ts/main.ts",
  plugins: [terser()],
  output: {
    file: "src/ts/main.js",
    format: "iife",
  },
};
