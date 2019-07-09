import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false

Vue.use(Vant)
import router from './router'
import '@/permission'
new Vue({
	router,
	Vant,
	render: h => h(App),
}).$mount('#app')
