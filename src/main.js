import Vue from 'vue'
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

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
