import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    }
  },
  resolve: {
    alias: {
      '@App': "/src/App",
      '@Api': "/src/Api",
      '@Components': "/src/Components",
      '@Store': "/src/Store",
      '@Utils': "/src/Utils",
      '@Icons': "/src/Components/Ui/Icons",
      '@Img': "/src/Assets/Img",
      '@Pages': "/src/Pages",
      '@Helpers': "/src/Utils/Helpers"
    }
  },
  build: {},
  test: {
    environment: 'jsdom'
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    })
  ],
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:5]' // Измените маску по своему усмотрению
    }
  }
});