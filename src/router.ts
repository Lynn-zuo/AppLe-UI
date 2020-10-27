import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import { h } from 'vue'
import Markdown from './components/Markdown.vue';

const history = createWebHashHistory()
// const md = filename => h(Markdown, {path:`../markdown/${filename}.md`, key: filename})
export const router = createRouter({
  history: history,
  routes:[
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children:[
      {path: '', redirect: '/doc/intro'},
      {path: 'intro', component: h(Markdown, {path:`../markdown/intro.md`})}, // intro.vue冗余可删，缺点是异步加载慢
      {path: 'install', component: Install},
      {path: 'get-start', component: GetStarted},
      {path: 'switch', component: SwitchDemo},
      {path: 'button', component: ButtonDemo},
      {path: 'dialog', component: DialogDemo},
      {path: 'tabs', component: TabsDemo}
    ]}
  ]
});
