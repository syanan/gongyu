// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lodash from 'lodash'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/style/mixin.less'

import store from './store'
import './assets/style/iconfont.css'
import './assets/iconfont/iconfont'
import utils from './common/util'
Vue.prototype.lodash=lodash;
Vue.use(elementUI)
Vue.use(utils)
Vue.config.productionTip = false
Vue.config.devtools = true

window.BASE='http://'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})























