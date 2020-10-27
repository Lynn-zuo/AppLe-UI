<template>
  <div>
    <h1>Dialog 组件文档</h1>
  </div>
  <Demo :component="DialogDemo1" />
  <hr />
  <Demo :component="DialogDemo2" />
</template>
<script lang="ts">
import Demo from './Demo.vue'
import DialogDemo1 from './DialogDemos/DialogDemo1.vue'
import DialogDemo2 from './DialogDemos/DialogDemo2.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
export default {
  components: {Demo},
  setup(){
    return {DialogDemo1, DialogDemo2}
  }
}
</script>