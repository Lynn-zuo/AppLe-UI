<template>
  <div>
    <div class="topnav">
      <div class="logo">LOGO</div>
      <input type="text" />
      <ul class="menu">
        <li><a href="/doc">文档</a></li>
        <li><a href="">组件</a></li>
      </ul>
      <span class="toggleAside"><i @click="toggleAside" class="iconfont icon-toggle"></i></span>
    </div>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible'); // get
    const toggleAside = ()=>{
      asideVisible.value = !asideVisible.value
    }
    return {toggleAside}
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  height:4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
  z-index: 10;
  background: rgb(204, 247, 230);
  > .logo{
    max-width: 6em;
    margin-left: 2rem;
    margin-right: auto;
  }
  > input {
    width: 13rem;
    height:2rem;
    border-radius: 2rem;
    margin-right: auto;
    border: 1px solid #99CCCC;
    &:focus{
      // tip:后面解决获得焦点时缝隙背景色差异
      border: #ffffff;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin-right:2rem;
      a:hover{
        color: #3366FF;
      }
    }
  }
  > .toggleAside {
    position: absolute;
    left: 1rem;
    display: none;
  }
  @media (max-width:500px) {
    > input {margin-right:1rem;}
    > .menu {display:none;}
    > .logo {margin-right:1.3rem;}
    > .toggleAside  {display: inline-block;}
  }
  @media (max-width:300px) {
    > input {display:none;}
    > .menu {display:none;}
    > .logo {margin-right:1.3rem;}
    > .toggleAside  {display: inline-block;}
  }
}
</style>