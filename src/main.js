import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueKonva from 'vue-konva'
 
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

import "./style/base.scss";

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if(to.meta.title) document.title = to.meta.title
    next()
})

Vue.use(axios, VueAxios, VueKonva);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
