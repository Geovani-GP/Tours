import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/// <reference types="vite/client" />

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  }
})