import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    soal: { emot: 'Soal' },
    winner: {}
  },
  mutations: {
    SOCKET_setPlayers (state, payload) {
      state.players = payload
    },
    SOCKET_setSoal (state, payload) {
      state.soal = payload
    },
    SOCKET_setWinner (state, payload) {
      state.winner = payload
    }
  }
})
