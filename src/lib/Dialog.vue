<template>
<template v-if="visible">
  <Teleport to="body">
  <div class="apple-dialog-overlay" @click="onClickOverlay"></div>
  <div class="apple-dialog-wrapper">
    <div class="apple-dialog">
      <header>
        <slot name="title"></slot>
        <span @click="close">
          <svg class="icon">
            <use xlink:href="#icon-close"></use>
          </svg>
        </span>
      </header>
      <main>
        <slot name="content"></slot>
      </main>
      <footer>
        <Button @click="ok" class="ok">OK</Button>
        <Button @click="cancel" class="cancel">Cancel</Button>
      </footer>
    </div>
  </div>
  </Teleport>
</template>
</template>
<script lang="ts">
import Button from './Button.vue'
export default {
  props:{
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    },
    title: {
      type: String,
      default: 'Alert'
    }
  },
  setup(props, context) {
    const close = ()=>{
      context.emit('update:visible', false)
    }
    const onClickOverlay = ()=>{
      if(props.closeOnClickOverlay){
        close()
      }
    }
    const ok = ()=>{
      if(props.ok && props.ok() !== false){
        close()
      }
    }
    const cancel = ()=>{
      props.cancel?.()
      close()
    }
    return {close, onClickOverlay, ok, cancel}
  },
  components:{
    Button
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.apple-dialog {
  background-color: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out($color: black, $amount: 0.5);
  min-width: 15em;
  max-width: 90%;
  header {
    padding:5px;
    text-align: center;
    border-bottom: 1px solid rgb(205, 205, 205);
    span {
      position: absolute;
      display: inline-block;
      right: 0.5em;
    }
  }
  main {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  footer {
    text-align: center;
    padding-bottom: 5px;
    Button {
      width: 58px;
      height: 25px;
      margin: 5px;
    }
    Button.ok{
      background-color:dodgerblue;
      color: white;
    }
  }
}
.apple-dialog-wrapper {
  position: fixed;
  z-index: 9;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow: hidden;
}
.apple-dialog-overlay {
  width: 100%;
  height: 100%;
  background: gray;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  opacity: 0.3;
}
</style>