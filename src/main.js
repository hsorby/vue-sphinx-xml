import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueHighlightJS from 'vue-highlightjs'
import VueKatex from 'vue-katex'

import 'highlight.js/styles/xcode.css'
import 'katex/dist/katex.min.css'

Vue.config.productionTip = false

Vue.use(VueHighlightJS)
Vue.use(VueKatex)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
