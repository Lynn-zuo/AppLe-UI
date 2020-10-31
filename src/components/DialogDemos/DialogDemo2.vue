<demo>
  一句话打开Dialog
</demo>

<template>
  <Button @click="showDialog">Toggle</Button>
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