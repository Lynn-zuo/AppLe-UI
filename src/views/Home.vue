<template>
  <div>
    <TopNav />
    <div class="banner">
      <h1><a class="Doc-title" href="">AppLe-UI</a></h1>
      <h3>一个优点可爱的简洁UI</h3>
      <p class="actions">
        <a href="https://github.com/Lynn-zuo" target="_blank">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components: {
    TopNav
  }
}
</script>

<style lang="scss" scoped>
$h:1.6rem;
.banner {
  background: #CCFFFF;
  padding-top: 2rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20rem;
  h1 {
    margin: 1rem 0;
  }
  > .actions {
    padding:1rem 0;
    a{
      margin: 1rem;
      background: #fff;
      display: inline-block;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 1rem;
      &:hover {
        color: #3366FF;
      }
    }
  }
}
</style>
