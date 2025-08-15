import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Determine base path based on environment
const getBasePath = () => {
  // For GitHub Pages deployment
  if (process.env.GITHUB_PAGES === "true") {
    return "/landing-page/";
  }
  // For local development and testing
  return "/";
};

// https://vitejs.dev/config/
export default defineConfig({
  base: getBasePath(),
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
    open: true,
  },
});
