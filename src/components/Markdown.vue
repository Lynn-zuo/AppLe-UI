<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  setup(props){
    const content = ref <string> (null)
    import(props.path).then(result => {
      // setTimeout(() =>{
      //   content.value = result.default
      // }, 5000)
      content.value = result.default
    })
    return { content }
  }
}
</script>