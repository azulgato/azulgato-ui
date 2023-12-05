import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), dts()],
  build: {
    outDir: 'lib',
    emptyOutDir: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'src/main.ts',
      name: 'azulgato-ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `azulgato-ui.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        inlineDynamicImports: true,
      },
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
})
