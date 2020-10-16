<template>
  <div id="game-page" style="min-height: 100vh;">
    <div class="text-center" :style="{'font-size': font_size, color: color_font}">{{soal.emot}}</div>
    <div class="container-fluid d-flex flex-column justify-content-center text-center">
      <h2 style="margin-bottom: 10%; color: rgb(79, 79, 58);">Click the correct arrow before your opponent does!</h2>
      <button @click="startGame" v-if="start" class="btn btn-info" style="width: 10%; margin-left: 46.5%">Start</button>
      <div id="players">
        <PlayerCard
        v-for="(player, i) in players"
        :key="i"
        :player="player"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PlayerCard from '../components/PlayerCard'
import sound from '../assets/correct.mp3'
import wrongSound from '../assets/failed.mp3'

export default {
  name: 'BoardGame',
  data () {
    return {
      start: false,
      image: '',
      color_font: 'transparent',
      font_size: '90px',
      audio: new Audio('../assets/zapsplat_multimedia_button_click_006_53867.mp3')
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
      localStorage.setItem('soal', this.$store.state.soal)
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
      this.color_font = 'black'
    },
    serverPlayers (player) {
      this.$store.commit('SOCKET_setPlayers', player)
    },
    gameOver (player) {
      this.$store.commit('SOCKET_setWinner', player)
      this.$router.push({ name: 'GameOver' })
    }
  },
  methods: {
    startGame () {
      this.$socket.emit('startGame')
    },
    keyDown (e) {
      if (e.keyCode === this.soal.keycode) {
        this.playSound(true)
        this.$socket.emit('addPoint')
      } else {
        this.playSound(false)
      }
    },
    playSound (isCorrect) {
      if (isCorrect) {
        const audio = new Audio(sound)
        audio.play()
      } else {
        const audio = new Audio(wrongSound)
        audio.play()
      }
    }
  },
  created () {
    window.addEventListener('keydown', this.keyDown)
    if (this.soal.point === 5) {
    }
  }
}
</script>

<style scoped>
  #players {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
  h1 {
    font-size: 500px;
    text-align: center;
    margin-top: -200px;
    margin-bottom: -70px;
  }
  #game-page {
    background-image: linear-gradient(to bottom right, #F2FAFF,#BFB6ED);
  }
</style>
