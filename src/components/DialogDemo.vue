<template>
  <div>
    Dialog的文档 
  </div>
  <h2>示例1</h2>
  <Button @click="toggle">Toggle</Button>
  <Dialog :visible="x"/>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'
export default {
  setup(){
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    return {x, toggle}
  },
  components:{
    Dialog,
    Button
  }
}
</script>