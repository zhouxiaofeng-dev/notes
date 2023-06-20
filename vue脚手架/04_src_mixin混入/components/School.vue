<template>
   <div class="school">
       <h2 @click="showName">学校名称:{{name}}</h2>
       <h2 @click="showAddress">学校地址:{{address}}</h2>
   </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    name:'School',
    data(){
        return {
            name:'广工',
            address:'北京'
        }
    },
    methods:{
       showAddress(){
           console.log(this.address);
       }
    },
    mixins:[mixin]
}
</script>

