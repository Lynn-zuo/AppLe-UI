// 声明.vue后缀文件避免报错
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
// 声明.md后缀文件避免报错
declare module '*.md' {
  const str: String
  export default str
}