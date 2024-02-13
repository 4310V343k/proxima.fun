import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import dns from 'dns'

//dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    host: true,
    port: 8080,
    https: false,
    strictPort: true,
    hmr: {
      host: true,
      protocol: 'wss',
      clientPort: 443,
    },
  }
})
