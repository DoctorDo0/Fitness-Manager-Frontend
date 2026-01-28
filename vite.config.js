import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from "vite-plugin-vue-devtools";
import {resolve} from "path"

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools()
    ],
    server: {
        host: "localhost",
        port: 3000,
        open: true,
        proxy: {
            // "/api"对应于util目录下的api.js中配置的baseUrl
            "/api": {
                target: "http://localhost:8080",
                changeOrigin: true,
                //第一个参数为正则表达式
                // rewrite: url => url.replace(/^\/api/, "/api/v1")
            }
        }
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        }
    }
})