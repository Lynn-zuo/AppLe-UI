<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-apple-book"></use>
      </svg>
    </router-link>
    <div class="search">
      <input type="text" />
      <svg class="icon iconfont">
        <use xlink:href="#icon-search"></use>
      </svg>
    </div>
    <ul class="menu">
      <li><router-link to="/doc">文档</router-link></li>
    </ul>
    <span class="toggleAside" @click="toggleAside" >
      <svg class="icon">
        <use xlink:href="#icon-toggle"></use>
      </svg>
    </span>
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
$pink: #D6A4A4;
.topnav {
  color: #3a5b7c;
  background: #DAE2F8;  /* fallback for old browsers */
  height:4.5rem;
  display: flex;
  justify-content: center;
  text-align:center;
  align-items: center;
  position:relative;
  z-index: 6;
  > .logo{
    max-width: 6em;
    margin-right: auto;
    > .icon {
      width: 46px;
      height: 46px;
      margin-left: 30px;
    }
  }
  > .search {
    width: 13rem;
    margin-right: auto;
    > input {
      width: 12rem;
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
    > svg.iconfont {
      position: relative;
      margin-left: -1.8rem;
      color: #a2a8af;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin-right:2.2rem;
      font-size:1.2rem;
      color: #EC6F66;
      a:hover{
        color: $pink;
      }
    }
  }
  > .toggleAside {
    position: absolute;
    left: 1rem;
    display: none;
    color: fadeout(blue, 0.5)
  }
  @media (max-width:500px) {
    > .search {
      > input {margin-right:1rem; width: 9rem;}
      > svg.iconfont {margin-left: -2.5rem;}
    }
    > .menu {display:none;}
    > .logo {margin-right: 1.2rem;margin-left: 2.5rem;}
    > .toggleAside  {display: inline-block;}
  }
  @media (max-width:330px) {
    > .search {display:none;}
    > .menu {display:none;}
    > .logo {margin-right: 3rem;}
    > .toggleAside  {display: inline-block;}
  }
}
</style>