import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-vite-app/', } ```[_{{{CITATION{{{_2{How to Host a Vite.js App on GitHub Pages](https://gist.github.com/Dev5G/ecb8551c60e2cb36d884be705c0ae23d),
  plugins: [react(), sentryVitePlugin({
    org: "jsm-d7u",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "jsm-d7u",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})
