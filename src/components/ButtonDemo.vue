<template>
  <div>
    Button示例
  </div>
  <h2>示例1</h2>
  <div>
    <Button @click="onClick"
    >默认</Button>
    <Button theme="button"
    >按钮</Button>
    <Button theme="link"
    >链接</Button>
    <Button theme="text"
    >文本</Button>
  </div>
  <h2>示例2</h2>
  <div>
    <Button @click="onClick"
    >默认</Button>
    <Button size="big"
    >大号</Button>
    <Button size="small"
    >小号</Button>
  </div>
  <div>
    <Button theme="link"
    >默认</Button>
    <Button theme="link" size="big"
    >大号</Button>
    <Button theme="link" size="small"
    >小号</Button>
  </div>
  <div>
    <Button theme="text"
    >默认</Button>
    <Button theme="text" size="big"
    >大号</Button>
    <Button theme="text" size="small"
    >小号</Button>
  </div>
  <h2>示例3</h2>
  <div>
    <Button @click="onClick"
    >普通按钮</Button>
    <Button level="main"
    >主要按钮</Button>
    <Button level="danger"
    >危险按钮</Button>
  </div>
  <div>
    <Button theme="link"
    >普通链接</Button>
    <Button theme="link" level="main"
    >主要链接</Button>
    <Button theme="link" level="danger"
    >危险链接</Button>
  </div>
  <div>
    <Button theme="text"
    >普通文字按钮</Button>
    <Button theme="text" level="main"
    >主要文字按钮</Button>
    <Button theme="text" level="danger"
    >危险文字按钮</Button>
  </div>
  <h2>示例4</h2>
  <div>
    <Button disabled
    >禁用按钮</Button>
    <Button :disabled="true"
    >禁用按钮</Button>
  </div>
  <div>
    <Button theme="text"  disabled
    >禁用按钮</Button>
    <Button theme="text"  :disabled="true"
    >禁用按钮</Button>
  </div>
  <div>
    <Button theme="text" disabled
    >禁用按钮</Button>
    <Button theme="text"  :disabled="true"
    >禁用按钮</Button>
  </div>
  <h2>示例5</h2>
  <div>
    <Button loading
    >加载中</Button>
    <Button>加载完毕</Button>
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