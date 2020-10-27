<demo>
  支持size
</demo>

<template>
<div>
  <div>
    <Button @click="onClick">默认</Button>
    <Button size="big">大号</Button>
    <Button size="small">小号</Button>
  </div>
  <div>
    <Button theme="link">默认</Button>
    <Button theme="link" size="big">大号</Button>
    <Button theme="link" size="small">小号</Button>
  </div>
  <div>
    <Button theme="text">默认</Button>
    <Button theme="text" size="big">大号</Button>
    <Button theme="text" size="small">小号</Button>
  </div>
</div>
</template>

<script>
import Button from '../../lib/Button.vue'
export default {
  components: {Button}
}
</script>