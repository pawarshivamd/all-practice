import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

export default defineConfig({
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(), 
  ]
})
