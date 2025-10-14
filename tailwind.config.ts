import type { Config } from 'tailwindcss'
import { preset } from '@nuxt/ui'

export default <Partial<Config>>{
  darkMode: 'class',
  presets: [preset],
  theme: {
    extend: {
      colors: {
        cyber: {
          // feminine + cyberspace: purples & greens
          bg: '#0c0a10',
          glass: 'rgba(255,255,255,0.06)',
          line: 'rgba(255,255,255,0.08)',
          purple: '#9b5cff',
          green: '#179D68'
        }
      },
      backdropBlur: {
        xl: '20px'
      },
      boxShadow: {
        'glass': '0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)'
      }
    }
  },
  plugins: []
}
