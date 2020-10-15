import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    soal: 0
  },
  mutations: {
    SOCKET_setPlayers (state, payload) {
      state.players = payload
    },
    SOCKET_setSoal (state, payload) {
      state.soal = payload
    }
  }
})
