<template>
  <div>
    Button示例
  </div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick"
    >你好</Button>
    <Button @click="onClick" theme="button"
    >你好</Button>
    <Button @click="onClick" theme="link"
    >你好</Button>
    <Button @click="onClick" theme="text"
    >你好</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {Button},
  setup() {
    return {}
  }
}
</script>

<style lang="scss">

</style>