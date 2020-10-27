<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="SwitchDemo1" />
    <hr />
    <Demo :component="SwitchDemo2" />
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import SwitchDemo1 from './SwitchDemos/SwitchDemo1.vue'
import SwitchDemo2 from './SwitchDemos/SwitchDemo2.vue'
import Demo from './Demo.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
export default {
  components: {Button, Demo},
  setup() {
    return {SwitchDemo1, SwitchDemo2, Prism}
  }
}
</script>
