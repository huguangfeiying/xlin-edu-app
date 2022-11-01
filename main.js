import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 全局引入混合文件
import mixin from './common/mixin/mixin.js'
Vue.mixin(mixin)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
