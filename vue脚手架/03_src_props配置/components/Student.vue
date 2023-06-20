<template>
   <div class="school">
        <h1>{{msg}}</h1>
       <h2>学生姓名：{{name}}</h2>
       <h2>学生性别：{{sex}}</h2>
       <h2>学生年龄：{{age+1}}</h2>
   </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            msg:'我是一个尚硅谷的学生'
        }
    },
    //简单接收
    // props:['name','sex','age']  
    //接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }
    //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:99
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>

