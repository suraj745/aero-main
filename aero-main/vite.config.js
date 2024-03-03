import { resolve } from "path";

const root = resolve(__dirname, "src");

export default {
  optimizeDeps: {
    include: ["jquery"],
  },
  base: "/",
  build: {
    rollupOptions: {
      input: {
        homePage: "./index.html", // Entry point for index.html
      },
    },
  },
};
