import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Doctorsappointment/',  // <-- ONLY the repo name, with slashes
  plugins: [react()],
})
