import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy' // 会使我们的打包速度变慢很多
import { resolve } from 'path'; // 注意 yarn add @types/node -D
import alias from '@rollup/plugin-alias'; // 注意，如果不加这个的话，alias不生效
import styleImport from 'vite-plugin-style-import'; // ant-design-vue 样式加载
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  console.log('mode', mode);
  
  return defineConfig({
      base: '/', /* 这个就是webpack里面的publicPath */
      plugins: [
        alias(), // 注意这里
        vue(),
        Components({
          resolvers: [
            AntDesignVueResolver(),
          ],
        }),
        // 加载antd-design-vue
        styleImport({
          libs: [{
           libraryName: 'ant-design-vue',
           esModule: true,
           resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/css`;
           },
          }]
         }),
        // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
        legacy({
          targets: ['defaults', 'not IE 11']
        })
      ],
      server: {
        host: '0.0.0.0', /* 指定服务器主机名 */
        // port: parseInt(loadEnv(mode, process.cwd()).VITE_APP_PORT), /* 指定服务器端口 */
        port: 3000,
        strictPort: true, /* 设为 true 时若端口已被占用则会直接退出 */
        // https: true, 
        open: '/', /* 在服务器启动时自动在浏览器中打开应用程序 */ 
        hmr: {
          overlay: false, /* 为 false 可以禁用服务器错误遮罩层 */
        },
        proxy: {
          // 字符串简写写法
          '/foo': 'http://localhost:4567/foo',
          // 选项写法
          '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          },
          // 正则表达式写法
          '^/fallback/.*': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/fallback/, '')
          }
        },
      },
      resolve: {
        /* 设置路径别名 */
        alias: {
          '@': resolve(__dirname, 'src'),
          '/images': 'src/assets/images'
        },
        extensions: ['.vue', '.js', '.json'] /* 默认这些，不建议.vue */
      },
      css: {
        /* CSS 预处理器 */
        preprocessorOptions: {
          scss: {
            additionalData: '@import "src/assets/styles/global.scss";'
          }
        }
      },
      build: {
        // target: 'es2015', /*  */
        // terserOptions: {
        //   compress: {
        //     defaults: false
        //   }
        // },
        brotliSize: false, /* 压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能 */
        outDir: 'dist', /* 指定输出路径 */
        cssCodeSplit: false, /* 整个项目中的所有 CSS 将被提取到一个 CSS 文件中 */
        chunkSizeWarningLimit: 1500, /* chunk 大小警告的限制（以 kbs 为单位） */
        sourcemap: true, /* 构建后是否生成 source map 文件 */
        manifest: true, /*  */
        assetsDir: 'static/img/', /* 指定生成静态资源的存放路径 */
        emptyOutDir: true, /* 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录 */
        rollupOptions: {
          output: {
              chunkFileNames: 'static/js/[name].[hash].js',
              entryFileNames: 'static/js/[name].[hash].js',
              assetFileNames: 'static/[ext]/[name].[hash].[ext]',
          },
        }
      },
  })
}