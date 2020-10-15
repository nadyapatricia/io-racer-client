import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    SOCKET_setPlayers (state, payload) {
      state.players.push(payload)
    }
  },
  actions: {
    SOCKET_register (context, payload) {
      this.$socket.emit('newPlayer', payload)
    }
  }
})
