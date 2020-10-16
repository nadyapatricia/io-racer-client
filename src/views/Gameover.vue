<template>
  <div style="height: 100vh;" class="d-flex flex-column justify-content-center align-items-center">
    <h1>GAME OVER</h1>
    <h5>The winner is..</h5>
    <h2>💕 {{player}} 💕</h2>
  </div>
</template>

<script>
export default {
  name: 'GameOver',
  computed: {
    player () {
      return this.$store.state.winner
    }
  }
}
</script>

<style scope>

</style>
