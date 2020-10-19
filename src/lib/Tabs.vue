<template>
  <div class="apple-tabs">
    <div class="apple-tabs-nav">
      <div class="apple-tabs-nav-item" :class="{selected: title==selected}"
      v-for="(title, index) in titles" :key="index" @click="select(title)">
      {{title}}</div>
    </div>
    <div class="apple-tabs-content">
      <component class="apple-tabs-content-item" :class="{selected:content.props.title===selected}" v-for="(content, index) in defaults" :is="content" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {computed} from 'vue'
export default {
  props:{
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag)=>{
      if(tag.type !== Tab){
        throw new Error('Tabs标签必须是Tab')
      }
    })
    const titles = defaults.map((tag)=>{
      return tag.props.title
    })
    const current = computed(()=>{
      return defaults.filter((tag)=>{
        return tag.props.title === props.selected
      })[0]
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {defaults, titles, current, select}
  }
}
</script>

<style lang="scss">
.apple-tabs {
  .apple-tabs-nav {
    border-bottom: 1px solid #9d9d9d;
    .apple-tabs-nav-item {
      line-height: 28px;
      display: inline;
      padding: 2px 20px 2px 5px;
    }
    .selected {
      color:dodgerblue;
    }
  }
  .apple-tabs-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display:block;
      }
    }
  }
}
</style>