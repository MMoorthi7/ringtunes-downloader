// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: "/ringtunes-downloader/", // Base path for production build

  server: {
    port: 3000, // Set the development server port
  },

  build: {
    outDir: 'dist', // Directory for production build output
  },
});
