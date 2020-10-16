<template>
<template v-if="visible">
  <div class="apple-dialog-overlay"></div>
  <div class="apple-dialog-wrapper">
    <div class="apple-dialog">
      <header>标题
        <span>x</span>
      </header>
      <main>
        <p>提示1</p>
        <p>提示2</p>
      </main>
      <footer>
        <Button class="ok">OK</Button>
        <Button class="cancel">Cancel</Button>
      </footer>
    </div>
  </div>
</template>
</template>
<script lang="ts">
import Button from './Button.vue'
export default {
  props:{
    visible: {
      type: Boolean,
      default: false
    }
  },
  components:{
    Button
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.apple-dialog {
  background-color: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out($color: black, $amount: 0.5);
  min-width: 15em;
  max-width: 90%;
  header {
    padding:5px;
    text-align: center;
    border-bottom: 1px solid rgb(205, 205, 205);
    span {
      position: absolute;
      display: inline-block;
      right: 0.5em;
    }
  }
  main {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  footer {
    text-align: center;
    Button {
      width: 58px;
      height: 25px;
      margin: 5px;
    }
    Button.ok{
      background-color:dodgerblue;
      color: white;
    }
  }
}
.apple-dialog-wrapper {
  position: fixed;
  z-index: 9;
  left: 40%;
  top: 40%;
}
.apple-dialog-overlay {
  color: transparent;
}
</style>