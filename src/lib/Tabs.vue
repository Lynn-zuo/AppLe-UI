<template>
  <div>
    <div class="tabs">
      <div class="tabs-title">
        <span v-for="p in panes" @click="setTab(p)">
          {{p.title}}
        </span>
      </div>
      <div class="tabs-content">
        <component :is="current"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
  props: {panes: Array},
  sestup(props) {
    const current = ref(props.panes[0].content)
    const setTab = (p) => {
      current.value = p.content
    }
    return {current, setTab}
  }
}
</script>

<style lang="scss">
.tabs {
  
}
</style>