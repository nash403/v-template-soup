import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {}

const getters = {}

const mutations = {}

const actions = {}

const modules = {}

// eslint-disable-next-line
const plugins = APP_CONFIG.enableVuexLogger ? [createLogger()] : []

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins,
  strict: process.env.NODE_ENV === 'development'
})
