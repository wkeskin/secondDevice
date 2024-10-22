import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your Express server's URL
        changeOrigin: true, // Ensures requests appear to come from the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: adjust path
      },
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});

