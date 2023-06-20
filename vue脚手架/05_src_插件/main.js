//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false;

//引入插件
import plugins from './plugins'
//应用(使用)插件
Vue.use(plugins);

//创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})