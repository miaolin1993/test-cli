import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { EsLinter, linterPlugin } from 'vite-plugin-linter'
import reactJsx from 'vite-react-jsx'
import path from 'path'

export default defineConfig((configEnv) => ({
  base: '',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  build: {
    rollupOptions: {
      input: {
        index: 'index.html'
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  plugins: [
    linterPlugin({
      include: [
        './src/**/*.ts',
        './src/**/*.tsx',
        './src/**/*.js',
        './src/**/*.jsx'
      ],
      linters: [new EsLinter({ configEnv })]
    }),
    reactJsx(),
    reactRefresh()
  ]
}))
