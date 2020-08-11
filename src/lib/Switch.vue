<template>
  <button @click="toggle" :class="{checked: checked}"><span></span></button>
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
  setup() {
    const checked = ref(false)
    const toggle = () => {
      checked.value = !checked.value
    }
    return {checked, toggle}
  }
}
</script>

<style lang="scss" scoped>
$h:22px;
$h1: $h - 4px;
button{
  width: 50px;
  height: $h;
  border: 1px solid rgb(133, 134, 139);
  background-color: rgb(160, 161, 163);
  border-radius: $h/2;
  outline:none;
  position: relative;
}
span{
  position:absolute;
  display:block;
  width: $h1;
  height: $h1;
  top:1px;
  left:0.2px;
  background-color: #ffffff;
  border-radius: $h1/2;
  transition: left 300ms;
}
button.checked{
  background-color:#3366FF;
}
button.checked > span{
  left: calc(100% - #{$h1});
}
</style>
