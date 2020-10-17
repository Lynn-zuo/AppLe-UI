<template>
  <div class="topnav">
    <div class="logo"><img src="../assets/logo.png" alt="LOGO"></div>
    <div class="search">
      <input type="text" />
      <i class="iconfont icon-search"></i>
    </div>
    <ul class="menu">
      <li><router-link to="/doc">文档</router-link></li>
      <li><router-link to="/">组件</router-link></li>
    </ul>
    <span class="toggleAside"><i @click="toggleAside" class="iconfont icon-toggle"></i></span>
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
  background: #DAE2F8;  /* fallback for old browsers */
  height:4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
  z-index: 6;
  > .logo{
    max-width: 6em;
    margin-left: 2rem;
    margin-right: auto;
    > img {
      max-width: 2.5em;
      margin-left: 2.5rem;
    }
  }
  > .search {
    width: 13rem;
    margin-right: auto;
    > input {
      width: 13rem;
      height:2.2rem;
      border-radius: 2rem;
      padding: 0.8rem;
      margin-right: auto;
      border: 1px solid #99CCCC;
      outline: none; // 去掉选中时的外边框
      &:focus{
        border: 1px solid #0066FF;
        &+ .iconfont{
          // 父选择器+相邻元素选择
          color: #0066FF;
      }
      }
    }
    > .iconfont {
      position: relative;
      margin-left: -1.8rem;
      color: #a4a5a6;
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
    > .search {display:none;}
    > .menu {display:none;}
    > .logo {margin-right:1.3rem;}
    > .toggleAside  {display: inline-block;}
  }
}
</style>