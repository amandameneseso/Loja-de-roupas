import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests starting with /api to your backend server
      '/api': {
        target: 'http://localhost:4000', // Your backend server URL
        changeOrigin: true, // Needed for virtual hosted sites
        // secure: false, // Use this if your backend is HTTPS with a self-signed cert
      },
    },
  },
});
