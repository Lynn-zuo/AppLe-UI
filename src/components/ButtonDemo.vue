<template>
  <div>
    <h1>Button组件示例</h1>
  </div>
  <Demo :component="ButtonDemo1" />
  <hr />
  <Demo :component="ButtonDemo2" />
  <hr />
  <Demo :component="ButtonDemo3" />
  <hr />
  <Demo :component="ButtonDemo4" />
  <hr />
  <Demo :component="ButtonDemo5" />
</template>

<script lang="ts">
import ButtonDemo1 from './ButtonDemos/ButtonDemo1.vue'
import ButtonDemo2 from './ButtonDemos/ButtonDemo2.vue'
import ButtonDemo3 from './ButtonDemos/ButtonDemo3.vue'
import ButtonDemo4 from './ButtonDemos/ButtonDemo4.vue'
import ButtonDemo5 from './ButtonDemos/ButtonDemo5.vue'
import Demo from './Demo.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
export default {
  components: {Demo},
  setup() {
    return {ButtonDemo1,ButtonDemo2, ButtonDemo3, ButtonDemo4, ButtonDemo5, Prism}
  }
}
</script>

<style lang="scss">

</style>