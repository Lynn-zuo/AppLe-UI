<template>
  <div>
    <TopNav />
    <div class="banner">
      <h1><a class="Doc-title" href="">AppLe-UI</a></h1>
      <h3>一个UI</h3>
      <p class="actions">
        <a href="">GitHub</a>
        <a href="">开始</a>
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
.banner {
  margin-top: 2rem;
  .actions a{
    &:hover {
      color: #3366FF;
      border-bottom: 1px solid #3333FF;
    }
  }
}
</style>
