<template>
  <div>
    <h1>{{soal}}</h1>
    <button class="btn btn-warning" v-if="start" @click="startGame">Start</button>
    <PlayerCard
      v-for="(player, i) in players"
      :key="i"
      :player="player"
    />
  </div>
</template>

<script>
import PlayerCard from '../components/PlayerCard'

export default {
  name: 'BoardGame',
  data () {
    return {
      start: false
    }
  },
  components: {
    PlayerCard
  },
  computed: {
    players () {
      return this.$store.state.players
    },
    soal () {
      return this.$store.state.soal
    }
  },
  sockets: {
    playerProfile (payload) {
      this.$store.commit('SOCKET_setPlayers', payload)
      const players = this.$store.state.players.length
      if (players >= 2) {
        this.start = true
      } else {
        this.start = false
      }
    },
    gamePlay (random) {
      this.$store.commit('SOCKET_setSoal', random)
      console.log(this.$store.state.soal)
    }
  },
  methods: {
    startGame () {
      this.$socket.emit('startGame')
      // this.start = false
    },
    addPoint () {
      this.$socket.emit('addPoint')
    }
  },
  mounted () {
    window.addEventListener('keydown', function (e) {
      console.log(e.keyCode)
      if (e.keyCode === this.soal) {
        this.addPoint()
      }
      // this.keycode = e.keyCode
      // console.log(this.keycode)
    })
  }
}
</script>

<style>

</style>
