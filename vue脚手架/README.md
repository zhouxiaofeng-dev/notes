# 笔记

## 脚手架文件结构

## 关于不同版本的 Vue

## Vue.config.js 配置文件

    1.使用vue inspect > output.js 可以查看到Vue脚手架的默认配置
    2.使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## ref 属性

    1.被用来给元素或子组件注册引用信息（id的替代者）
    2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象
    3.使用方式：
       打标识：<h1 ref="xxx">...</h1>  <School ref="xxx"/>
        获取：this.$refs.xxx

## 配置项 props

    功能：让组件接收外部传过来的数据
    (1)传递数据
        <Demo name:"xxx" />
    (2)接收数据
        第一种方式(只接收):
        props:['name']
        第二种方式(限制类型):
        props:{
            name:String
            ....
        }
        第三种方式(限制类型、限制必要性、指定默认值)
        props:{
            name:{
                type:String,    //类型
                required:true,  //必要性
                default:'xxx'   //默认值
            }
        }
    备注:props是只读的，Vue底层会检测你对props的修改，如果进行了修改，就会发出警告。若业务需求确实需要修改，那么请复制props的内容到data中备份，然后去修改data中的数据

## mixin(混入)

    功能:可以把多个组件共用的配置提取成一个混入对象
    使用方式:
        第一步定义混合,例如:
          {
              data(){...},
              methods:{...},
              .....
          }
        第二步使用混入,例如:
            (1)全局混入:Vue.mixin(xxx)
            (2)局部混入:mixins:['xxx]

## 插件

    功能:用于增强Vue
    本质:包含install方法的一个对象，install的第一个参数是Vue,第二个以后的参数是插件使用者传递的数据

    定义插件:
      对象.install = function (Vue,options){
           //1.添加全局过滤器
           Vue.filter(...)
           //2. 添加全局指令
           Vue.directive(...)
           //3. 配置全局混入(合)
           Vue.mixin(...)
           //4.添加实例方法
           Vue.prototype.$myMethod = function () {...}
           Vue.prototype.$myProperty = xxxx
      }

    使用插件:Vue.use()

## scoped 样式

    作用:让样式在局部生效，防止冲突
    写法:<style scoped>

## 总结 Todolist 案例

    1.组件化编码流程
    (1)拆分静态组件:组件要按照功能点拆分，命名不要与html元素冲突
    (2)实现动态组件:考虑好数据的存放位置，数据是一个组件再用，还是一些组件在用
         1)一个组件在用:放在组件自身即可
         2)一些组件再用:放在他们共同的父组件上(状态替身)
    (3)实现交互:从绑定事件开始
    2.props适用于
        (1)父组件 ==> 子组件 通信
        (2)子组件 ==> 父组件 (要求父先给子一个函数)
    3.使用v-model时要切记:v-model绑定的值不能是props传过来的值,因为props是不可以修改的
    4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这么做

## 组件的自定义事件

    1.一种组件间通信的方式,适用于:子组件===>父组件
    2.使用场景:A是父组件,B是子组件,B想给A传数据,那么就要在A中给B绑定自定义事件(事件的回调在A上)
    3.绑定自定义事件
         1):第一种方式,在父组件中:<Demo @zxf="test"/>或<Demo v-on:zxf="test" />
         2)第二种方式,在父组件中:
            <Demo ref="demo" />
            ........
            mounted(){
                this.$refs.demo.$on('zxf',this.test)
            }
        3)若想让自定义事件只触发一次，可以使用once修饰符，或$once方法
    4.触发自定义事件:this.$emit('zxf')
    5.解绑自定义事件:this.$off('zxf)
    6.组件上也可以绑定原生DOM事件，需要使用native修饰符
    7.注意:通过this.$refs.xxx.$on('zxf',回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向错误

## 全局事件总线

    1.一种组件间通信的方式，适用于任意组件间通信
    2.安装全局事件总线
       new Vue({
           ...,
           beforeCreate(){
               Vue.protetype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
           },
           ......
       })
    3.使用全局事件总线
        1.接收数据:A组件想接收数据，则在A组件中给$bus绑定自定义事件,事件的回调留在A组件自身
           methods(){
               demo(data){.......}
           }
           ......
           mounted(){
               this.$bus.$on('xxx',this.demo);
           }
        2.提供数据:this.$bus.$emit('xxx',数据)
    4.最好在beforeDestory钩子中，用$off去1解绑当前组件所用到的事件
