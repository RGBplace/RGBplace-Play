import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Header from './components/Header'
import Logo from './components/Logo'
import ArrangeNumber from './components/ArrangeNumber'
import TextReverse from './components/TextReverse'
import Playground from './components/Playground'

Vue.component('vue-header', Header);

export default new Router({
  routes: [
    { path: '/logo', component: Logo },
    { path: '/arrange-number', component: ArrangeNumber},
    { path: '/text-reverse', component: TextReverse },
    { path: '/playground', component: Playground }
  ]
})
