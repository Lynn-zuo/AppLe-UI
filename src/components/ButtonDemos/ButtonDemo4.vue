<demo>
  支持 disabled
</demo>

<template>
<div>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button :disabled="true">禁用按钮</Button>
  </div>
  <div>
    <Button theme="text"  disabled>禁用按钮</Button>
    <Button theme="text"  :disabled="true">禁用按钮</Button>
  </div>
  <div>
    <Button theme="text" disabled>禁用按钮</Button>
    <Button theme="text"  :disabled="true">禁用按钮</Button>
  </div>
</div>
</template>

<script>
import {Button} from '../../lib/index'
export default {
  components: {Button}
}
</script>