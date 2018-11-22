// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import routes from './router'
import VueRouter from 'vue-router';
import VueCookie from 'vue-cookie';
import store from './store'

//使用cookie
Vue.use(VueCookie);
//引入axios
import axios from 'axios'
Vue.prototype.$http = axios;

require('./assets/css/reset.css');

Vue.use(ElementUI);
Vue.use(Router)

const router = new VueRouter({
  routes,
  mode: 'history', 
})
router.beforeEach((to, from, next) => {
  if(to.path == '/login'){
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if(!user && to.path !='/login'){
    next({path:'/login'})
  } else {
    next()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
