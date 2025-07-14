import { defineConfig } from 'vite'
import AlpineVitePlugin from './alpine-vite-plugin.js'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        AlpineVitePlugin()
    ],
    root: './',
    base: './',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html')
            },
            output: {
                entryFileNames: 'assets/js/[name]-[hash].js',
                chunkFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split('.');
                    const extType = info[info.length - 1];
                    if (/\.(css|scss|sass)$/.test(assetInfo.name)) {
                        return 'assets/css/[name]-[hash][extname]';
                    }
                    if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
                        return 'assets/img/[name]-[hash][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                }
            }
        }
    },
    server: {
        open: true,
        port: 3000
    }
})