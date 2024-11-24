import { createApp } from 'vue'
import './assets/main.css'
import router from './routers/index.js'
import App from './App.vue'	
import axios from 'axios'
import VueAxios from 'vue-axios'
import request from './request/request.js'

const app = createApp(App)
// 使用 app.config.globalProperties 注册全局属性,不能修改prototype
app.config.globalProperties.$request = request;
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
