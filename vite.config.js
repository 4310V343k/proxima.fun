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

  clearScreen: false,
  server: {
    host: '0.0.0.0',  // CRITICAL, OK
    //host: true,  // OK
    //host: 'localhost',  // NOT FOR PUBLIC
    port: 80,  // CRITICAL
    //https: false,  // UNKNOWN
    strictPort: true,  // OK
    //// https://vitejs.dev/config/server-options.html#server-hmr
    //hmr: false
    hmr: {
      host: 'localhost',  // CRITICAL, OK
      //host: '0.0.0.0',  // LOOP
      //host: true,  // LOOP
      protocol: 'ws',  // OK
      //protocol: 'wss',  // LOOP
      //port: 8080,
      port: 443,  // OK
      //Port: 443,  // OK
      //port: 3000,
      //clientPort: 8080,
      //clientPort: 3001,
      clientPort: 443,  // LOOP
    },
  }
})
