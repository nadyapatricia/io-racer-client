<template>
  <div>
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
  components: {
    PlayerCard
  },
  computed: {
    players () {
      return this.$store.state.players
    }
  },
  sockets: {
    playerProfile (payload) {
      this.$store.commit('SOCKET_setPlayers', payload)
    }
  }

}
</script>

<style>

</style>
