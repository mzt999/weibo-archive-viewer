import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./views/Home.vue') },
  { path: '/page/:page', component: () => import('./views/Page.vue') },
  // 其他路由...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 不需要清空页面的情况下
// createApp(App).use(router).mount('#app');


function mountApp() {
  // 1. ✅ 第一步：清空页面所有原本的内容
  // 注意：这会移除 body 下的所有子节点（包括之前添加的任何东西）
  document.body.innerHTML = ''

  // 2. ✅ 第二步：在清空后的 body 上创建并添加我们自己的容器
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  // 3. ✅ 第三步：挂载 Vue 应用
  createApp(App).use(router).mount(container);
}

// 等待 DOM 加载完成后执行
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  mountApp()
} else {
  document.addEventListener('DOMContentLoaded', mountApp)
}