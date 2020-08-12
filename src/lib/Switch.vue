<template>
  <button @click="toggle" :class="{checked: value}"><span></span></button>
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
  props:{
    value:Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
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
  > span{
    position:absolute;
    display:block;
    width: $h1;
    height: $h1;
    top:1px;
    left:0.2px;
    background-color: #ffffff;
    border-radius: $h1/2;
    transition: left 250ms;
  }
  &.checked{
    background-color:#3366FF;
    > span{
      left: calc(100% - #{$h1});
    }
  }
  &:active {
    > span {
      width: $h1 + 4px;
    }
  }
  &.checked:active {
    >span {
      width: $h1 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
