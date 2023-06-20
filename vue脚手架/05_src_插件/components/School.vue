<template>
   <div class="school">
       <h2 >学校名称:{{name | mySlice}}</h2>
       <h2 >学校地址:{{address}}</h2>
       <button @click="test">点我测试一下hello方法</button>
   </div>
</template>

<script>

export default {
    name:'School',
    data(){
        return {
            name:'广东工业大学',
            address:'北京'
        }
    },
    methods:{
        test(){
            this.hello()
        }
    }

}
</script>

