import { defineConfig } from 'vite'

export default () => {

  return defineConfig({
    server: {
      hmr: true,
      port:8080,
    },
    
  })
}


