<template>
  <div>
    <h1 v-if="pertanyaan">{{ soal }}</h1>
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
      start: true,
      score: 0,
      pertanyaan: false
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
      return this.$store.state.soal[this.$store.state.index]
    }
  },
  methods: {
    incrementScore () {
      this.score += 5
    },
    startGame () {
      this.pertanyaan = true
      // this.start = false
    },
    addPoint (num) {
      this.$socket.emit('addPoint', num)
      console.log(num)
    }
  },
  created () {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.showModal = !this.showModal
      }
    })
  },
  mounted () {
    window.addEventListener('keydown', function (e) {
      console.log(e.keyCode)
      if (e.keyCode === this.$store.state.soal[this.$store.state.index]) {
        this.incrementScore()
        console.log(this.score)
      }
    })
  }
}
</script>

<style>

</style>
