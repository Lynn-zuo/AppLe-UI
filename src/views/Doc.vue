<template>
  <div class="layout">
    <TopNav class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-start">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>


<script lang="ts">
import TopNav from '../components/TopNav.vue'
import {inject, Ref} from 'vue'
export default {
  components: { TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible'); // get
    return {asideVisible}
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display:flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
  }
}
.content {
  display: flex;
  background: #DAE2F8;  /* fallback for old browsers */
  aside {
    z-index:1;
    background: #DAE2F8;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #DAE2F8, #D6A4A4);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #DAE2F8, #D6A4A4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 200px;
    color:#3a5b7c;
    > h2 {
      margin-bottom: 5px;
      padding: 0 10px;
    }
    > ol {
      padding: 5px 0;
      > li {
        > a {
          display: block;
          padding: 4px 10px;
          text-decoration: none;
        }
      }
    }
    .router-link-active {
      background-color:#DAE2F8;
    }
    @media (max-width: 500px) {
      width: 180px;
      height: 100%;
      top: 4.5em;
      left: 0;
      position: fixed;
    }
  }
  main {
    width: 100%;
    margin-top: 3px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
