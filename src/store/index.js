import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    soal: [],
    winner: '',
    index: 0
  },
  mutations: {
    INCREMENT_INDEX (state) {
      state.index++
    },
    SOCKET_MUTATION_GET_DATA_PLAYER (state, payload) {
      state.players = payload
    },
    SOCKET_MUTATION_GET_RANDOM_QUESTION (state, payload) {
      state.soal = payload
    },
    SOCKET_MUTATION_GET_WINNER (state, payload) {
      console.log(payload)
      state.winner = payload
    }
  },
  actions: {
    incrementIndex (context) {
      context.commit('INCREMENT_INDEX')
    }
  }
})
