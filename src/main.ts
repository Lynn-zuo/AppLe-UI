import './lib/apple.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/iconfont.css'
import {router} from './router'
import 'github-markdown-css'


const app = createApp(App);
app.use(router);
app.mount('#app');
