<template>
  <div>
    <div class="topnav">
      <div class="logo">LOGO</div>
      <div class="search">
        <input type="text" />
      </div>
      <ul class="menu">
        <li><a href="">文档</a></li>
        <li><a href="">组件</a></li>
      </ul>
    </div>
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

<style lang="scss" scoped>
.topnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(162, 245, 213);
  .logo{
    margin-left:1rem;
  }
  input {
    width: 13rem;
    border-radius: 9px;
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