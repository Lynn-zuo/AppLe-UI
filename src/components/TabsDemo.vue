<template>
  <div>
    <h1>Tabs组件示例</h1>
  </div>
  <Demo :component="TabsDemo1" />
</template>

<script lang="ts">
import TabsDemo1 from './TabsDemos/TabsDemo1.vue'
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {ref} from 'vue'
import Demo from './Demo.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
export default {
  components: {Tabs, Tab, Demo},
  setup () {
    const x = ref('导航1')
    return {x, Prism, TabsDemo1}
  }
}
</script>

<style lang="scss">

</style>