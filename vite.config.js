import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monkey, { cdn } from 'vite-plugin-monkey'// 1. 引入插件和 cdn 工具

// https://vite.dev/config/
export default defineConfig({
  define: {
    __PRESET_PROFILE__: {
      weibo_name: "摩登兄弟刘宇宁",
      weibo_id: "5456865382",
      weibo_intro: "歌手",
      weibo_bg_img: "https://wx2.sinaimg.cn/mw2000/005XirXMly1grl7q699ecj30e80e8mxt.jpg",
      weibo_profile_img: "https://wx3.sinaimg.cn/mw2000/005XirXMly8hlj5aowh7wj30e80e8aal.jpg",
      perPage: 10
    }
  },
  plugins: [
    vue(),
    // monkey({
    //   // 如需使用开发者模式，要把monkey注释掉
    //   // 如需用monkey打包，则还原并run build，在dist文件夹里找输出的monkey代码
    //   // 复制到tampermonkey即可使用
    //   // 记得要打开tampermonkey的允许使用自建脚本
    //   // 2. 入口文件：通常是 src/main.js 或 src/main.ts
    //   entry: 'src/main.js',
    //   // 3. 配置用户脚本的头部信息 (UserScript Header)
    //   userscript: {
    //     name: 'weibo-archive-viewer',
    //     namespace: 'https://your-namespace.com/',
    //     version: '0.0.1',
    //     description: '自主加载微博的脚本',
    //     author: 'why',
    //     match: [
    //       'https://weibo.com/' // 必须是微博首页
    //     ],
    //     // grant 可以自动检测，通常不需要手动写了
    //   },
    //   // 4. 构建配置
    //   build: {
    //     // 将 vue 标记为外部依赖，从 CDN 加载，大幅减小脚本体积[reference:2]
    //     externalGlobals: {
    //       // 使用 npmmirror 国内 CDN 加速[reference:3][reference:4]
    //       vue: cdn.npmmirror('Vue', 'dist/vue.global.prod.js'),
    //     },
    //   },
    // }),
  ],
})
