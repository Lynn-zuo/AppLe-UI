<template>
  <div>
    <div class="topnav">
      <div class="logo">LOGO</div>
      <input type="text" />
      <ul class="menu">
        <li><a href="">文档</a></li>
        <li><a href="">组件</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
}
</script>

<style lang="scss" scoped>
.topnav {
  height:3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(204, 247, 230);
  .logo{
    margin-left:1rem;
  }
  input {
    width: 15rem;
    height:2rem;
    border-radius: 2rem;
    border: 1px solid #99CCCC;
    &:focus{
      // tip:后面解决获得焦点时缝隙背景色差异
      border: #ffffff;
    }
  }
  ul {
    li {
      display:inline;
      margin-right:1rem;
      a:hover{
        color: #3366FF;
      }
    }
  }
}
</style>