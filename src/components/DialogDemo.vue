<template>
  <div>
    Dialog的文档 
  </div>
  <h2>示例1</h2>
  <Button @click="toggle">Toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="fn1" :cancel="fn2">
    <template v-slot:title>
      <strong>Title</strong>
    </template>
    <template v-slot:content>
      提示内容
    </template>
  </Dialog>
  <h2>示例2</h2>
  <Button @click="showDialog">Toggle</Button>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {openDialog} from '../lib/openDialog'
import {ref} from 'vue'
export default {
  setup(){
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const fn1 = ()=>{
      return false
    }
    const fn2 = ()=>{
    }
    const showDialog = ()=>{
      openDialog({
        title:'Title',
        content: '提示信息!',
        closeOnClickOverlay: false,
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {x, toggle, fn1, fn2, showDialog}
  },
  components:{
    Dialog,
    Button
  }
}
</script>