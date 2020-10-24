# 开始使用

请先安装本组件库

然后在你的代码中先写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "Apple-UI"
```

就可以使用我提供的组件了

# Vue单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
  import {Button, Tabs, Switch, Dialog} from "Apple-UI"
  export default {
    component: {Button}
  }
</script>
```