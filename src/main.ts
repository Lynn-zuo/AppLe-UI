import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Lynn from './components/Lynn.vue'
import Lynn2 from './components/Lynn2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes:[
    {path: '/', component: Lynn},
    {path: '/12', component: Lynn2}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
