import Vue from 'vue'
import App from './App'
import globle from './utils/request'
import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false
Vue.prototype.$request = globle
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount() 
