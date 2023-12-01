import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const arrayOfKeys = [
  "VITE_PAYPAL_CLIENT_ID",
  "VITE_API_KEY_LOCATION",
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  arrayOfKeys.forEach(key => processEnv[key] = env[key]);
  
  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        '/api': {
          // development
          // target: 'http://localHost:5000/',
          // for prodoction only:
          target: 'https://store-yxvx.onrender.com/',
          changeOrigin: true,
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  }
})