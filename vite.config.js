import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Helper function to read custom .envdevelopment file
function loadCustomEnv(filePath) {
  const env = {}
  if (fs.existsSync(filePath)) {
    const lines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/)
    for (const line of lines) {
      const clean = line.replace(/\/\/.*$/, '').replace(/#.*$/, '').trim()
      if (!clean) continue
      const eqIdx = clean.indexOf('=')
      if (eqIdx !== -1) {
        const key = clean.slice(0, eqIdx).trim()
        let val = clean.slice(eqIdx + 1).trim()
        val = val.replace(/^["']|["']$/g, '')
        env[key] = val
      }
    }
  }
  return env
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const customDev = loadCustomEnv(path.resolve(process.cwd(), '.envdevelopment'))
  const env = loadEnv(mode, process.cwd(), '')
  const merged = { ...env, ...customDev }

  return {
    plugins: [react()],
    envPrefix: ['VITE_', 'my', 'MY_'],
    server: {
      port: 3000,
    },
    define: {
      'import.meta.env.VITE_NAME': JSON.stringify(merged.VITE_NAME || 'Rouf'),
      'import.meta.env.VITE_EMAIL': JSON.stringify(merged.VITE_EMAIL || 'abdulroufshaik16@gmail.com'),
      'import.meta.env.VITE_LOCATION': JSON.stringify(merged.VITE_LOCATION || 'Vijayawada, India'),
      'import.meta.env.VITE_PHONE': JSON.stringify(merged.VITE_PHONE || '9346222492'),
    },
  }
})
