<template>
  <div>
      <h2>学生名称：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
       return {
           name:'张三',
           age:18
       }
   },
   methods:{
       showName(){
           alert(this.name)
       }
   },
}
</script>

<style>
 .demo {
    background-color: orange;
 }
</style>