<template>
  <div class="apple-tabs">
    <div class="apple-tabs-nav" ref="container">
      <div class="apple-tabs-nav-item" :class="{selected: title==selected}"
      v-for="(title, index) in titles" @click="select(title)"
      :ref="el => { if(title==selected) selectedItem = el }" :key="index">
      {{title}}</div>
      <div class="apple-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="apple-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {computed, ref, onMounted, watchEffect} from 'vue'
export default {
  props:{
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    // 下划线宽度改变及移动
    onMounted(()=>{
      watchEffect(()=>{
        const {width} = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const {left: left1} = container.value.getBoundingClientRect()
        const {left: left2} = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      },
      {
        flush: 'post'
      })
    })
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
      // return defaults.filter(tag=>
      //   tag.props.title == props.selected
      // )[0]
      return defaults.find(tag => tag.props.title == props.selected)
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {defaults, titles, current, select, selectedItem, indicator, container}
  }
}
</script>

<style lang="scss">
.apple-tabs {
  &-nav {
    border-bottom: 1px solid #9d9d9d;
    &-item {
      line-height: 28px;
      display: inline;
      padding: 2px 5px 2px 5px;
      margin-right: 15px;
    }
    &-indicator {
      position: relative;
      height: 2px;
      background-color:dodgerblue;
      left: 0;
      bottom: -1px;
      transition: left 0.25s;
    }
    .selected {
      color:dodgerblue;
    }
  }
  .apple-tabs-content {
    padding: 8px 0;
  }
}
</style>