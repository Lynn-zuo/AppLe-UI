<template>
  <button class="apple-button" 
  :class="classes" 
  :disabled="disabled">
    <span class="apple-loadingIndicator" v-if="loading"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  props: {
    theme:{
      type: String,
      default: 'button'
    },
    size:{
      type: String,
      default: "normal"
    },
    level:{
      type: String,
      default: "normal"
    },
    disabled:{
      type: Boolean,
      default: false
    },
    loading:{
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {theme, size, level} = props
    const classes = computed (() => {
      return {
        [`apple-theme-${theme}`]:theme,
        [`apple-size-${size}`]:size,
        [`apple-level-${level}`]:level
      }
    })
    return {classes}
  }
}
</script>
<style lang="scss">
$h: 28px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: #f50808;
$grey: rgb(125, 126, 126);
$radius: 4px;
.apple-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out (black, 0.95);
  & + & {
    margin-left: 5px;
  }
  &:hover,&:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.apple-theme-link{
    border-color: transparent;
    background: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,&:focus {
      color: lighten($blue, 10%);
    }
  }
  &.apple-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    background: transparent;
    &:hover,&:focus {
      background: darken(white, 5%);
    }
  }
  &.apple-size-small{
    font-size: 8px;
    height: 24px;
  }
  &.apple-size-big{
    font-size: 24px;
    height: 36px;
  }
  &.apple-theme-button{
    &.apple-level-main{
      color:white;
      background: $blue;
      &:hover,&:focus{
        color: darken($blue, 10%);
      }
    }
    &.apple-level-danger{
      background: $red;
      &:hover,&:focus{
        background: darken($red, 10%);
        color: $color;
        border-color: transparent;
      }
    }
  }
  &.apple-theme-link, &.apple-theme-text {
    &.apple-level-main{
      color: $blue;
      &:hover,&:focus{
        color: darken($blue, 10%);
      }
    }
    &.apple-level-danger{
      color: $red;
      &:hover,&:focus{
        color: darken($red, 10%);
      }
    }
  }
  &.apple-theme-button{
    &[disabled]{
      cursor: not-allowed;
      color:$grey;
      background: transparent;
      &:hover,&:focus{
        border-color:$grey;
      }
    }
  }
  &.apple-theme-link, &.apple-theme-text {
    &[disabled]{
      cursor: not-allowed;
      color:$grey;
      background: transparent;
    }
  }
  > .apple-loadingIndicator {
    width:14px;
    height:14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 7px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: apple-spin 1s infinite linear;
  }
}
@keyframes apple-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>
