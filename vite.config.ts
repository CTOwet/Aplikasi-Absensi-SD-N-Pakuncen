import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // arahkan ke backend lokal
        changeOrigin: true,
        secure: false,
      },
    },
    allowedHosts: ['.ngrok-free.app'],
  },
})
