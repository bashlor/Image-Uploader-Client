import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'




export default ({mode}) => {

  return defineConfig({
    server: {
      hmr: true,
      port:8080,
    },
    
  })
}


