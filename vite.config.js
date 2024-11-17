import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'headerApp',
      filename: 'headerRemoteEntry.js',
      exposes: {
        './Header': './src/App.jsx'
      },
      shared: {
        'react': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        }
      }
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  preview: {
    port: 4001,
  },
  server: {
    port: 5001
  },
  build: {
    target: 'esnext', //browsers can handle the latest ES features
    cssCodeSplit: true
  },
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    }
  },
  base: 'https://naveen-vite-applicationh.netlify.app',
})
