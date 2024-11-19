import { defineConfig } from 'vite'
import tsconfigPath from "vite-tsconfig-paths"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPath()],
})