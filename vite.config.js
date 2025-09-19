import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-react-website/',
})
// not my first time using react but definitely first using vite
// still can't tell the difference