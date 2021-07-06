import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
// element-ui 组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 滚动条样式
import GeminiScrollbar from 'vue-gemini-scrollbar'
// 本地数据库 nedb
import db from './datastore'

Vue.prototype.$db = db
Vue.use(GeminiScrollbar)
Vue.use(ElementUI)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
