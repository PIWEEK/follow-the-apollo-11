import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from 'vuex/dist/logger'

import game from '@/store/modules/game'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { version: '1.0.0' },
  modules: {
    game
  },
  strict: process.env.VUE_APP_DEBUG === 'true',
  plugins: process.env.VUE_APP_DEBUG === 'true' && process.env.NODE_ENV === 'development'
    ? [createLogger()]
    : []
})
