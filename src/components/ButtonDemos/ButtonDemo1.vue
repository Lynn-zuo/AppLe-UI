<demo>
  基本按钮
</demo>

<template>
  <div>
    <Button @click="onClick">默认</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
</template>

<script>
import Button from '../../lib/Button.vue'
export default {
  components: {Button}
}
</script>