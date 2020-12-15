import Vue from 'vue'
import Vuex from 'vuex'

import * as sphinx from './modules/sphinx.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { sphinx },
})
