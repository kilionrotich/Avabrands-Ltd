import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Avabrands-Ltd/', // replace with exact GitHub repo name
})
