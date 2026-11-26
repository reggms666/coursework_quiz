import { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'ui-library': resolve(__dirname, '../ui-library/src/index.ts')
    }
  }
})