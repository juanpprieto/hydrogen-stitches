import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import netlify from '@netlify/hydrogen-platform/plugin';

export default defineConfig({
  plugins: [hydrogen(), netlify()],
  optimizeDeps: {
    include: ['@stitches/react'],
  },
});
