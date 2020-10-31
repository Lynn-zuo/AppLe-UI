<demo>
  点击弹出Dialog
</demo>

<template>
  <div>
    <Button @click="toggle">Toggle</Button>
    <Dialog v-model:visible="x" 
      :closeOnClickOverlay="false" 
      :ok="fn1" :cancel="fn2">
      <template v-slot:title>
        <strong>Title</strong>
      </template>
      <template v-slot:content>
        提示内容
      </template>
    </Dialog>
  </div>
</template>

<script>
import {Button, Dialog, openDialog} from '../../lib/index'
import {ref} from 'vue'
export default {
  components: {Button, Dialog},
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
  }
}
</script>