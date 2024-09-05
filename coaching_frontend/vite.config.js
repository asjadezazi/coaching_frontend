import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      // Vite will process imported CSS files from node_modules
      additionalData: `@import "slick-carousel/slick/slick.css"; @import "slick-carousel/slick/slick-theme.css";`,
    },
  },
  resolve: {
    alias: {
      'slick-carousel': 'slick-carousel/slick',
    },
  },
});
