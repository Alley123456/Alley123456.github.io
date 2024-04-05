import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import './style/common.css'
import './style/font_2/iconfont.css'
const app=createApp(App)
app.use(router).mount('#app')