// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import $ from 'jquery'
import '@/api/axios'
import '../mock/mock.js'
import 'element-ui/lib/theme-chalk/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import echarts from 'echarts'

// let echarts = require('echarts/lib/echarts'); // 引入 ECharts 主模块
// require('echarts/lib/chart/bar'); // 引入柱状图
// require('echarts/lib/component/tooltip'); // 引入提示框和标题组件
// require('echarts/lib/component/title');
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$ = $;

library.add(faTachometerAlt, faEdit)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// 过滤器
Vue.filter('arrayFormat', function(value) {
  value = value.map(item => item.display_name)
  return value.join(',')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
