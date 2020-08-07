<template>
  <div class="layout">
    <TopNav class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
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
    flex-shrink: 0;;
  }
  > .content {
    flex-grow: 1;
  }
}
.content {
  display: flex;
  aside {
    background: lightblue;
    width: 11rem;
    padding: 1.5rem;
    > h2 {
      margin-bottom: 0.5rem;
    }
    > ol {
      > li {
        padding: 0.5rem 0;
      }
    }
    @media (max-width: 500px) {
      top: 0;
      left: 0;
      position: fixed;
      padding-top: 6em;
    }
  }
}
</style>
