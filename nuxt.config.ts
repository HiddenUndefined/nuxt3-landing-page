import { resolve } from 'pathe'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  /**
   * Build modules
   */
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
        ]
      }
    ]
  ],

  /**
   * Vite
   */
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component'
      })
    ],
    css: {
      preprocessorOptions: {
        stylus: {
          imports: [
            `${ resolve(__dirname, 'styles/control.styl') }`
          ]
        }
      }
    }
  },

  /**
   * CSS
   */
  css: [
    '@/styles/reset.styl',
    '@/styles/base.styl'
  ]
})
