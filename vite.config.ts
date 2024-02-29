/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ exclude: ['**/*.stories.ts'] })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'MyLib',
      fileName: 'my-lib',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
})
