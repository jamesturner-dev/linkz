import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
 // add this line for server
//  server: {
//   proxy: {
//     "/api":  "http://localhost:5000",
//     },
//   },
})
