<template>
  <div class="home">
      <h1>We need your name racer</h1>
      <form @submit.prevent="register">
      <input type="text" id="name" placeholder="your name.." v-model="name">
      <button>Regist me!</button>
    </form>
  </div>
</template>
<script>

export default {
  name: 'Home',
  data () {
    return {
      name: '',
      players: []
    }
  },
  methods: {
    register () {
      this.$socket.emit('newPlayer', { name: this.name, point: 0 })
      this.$router.push('/board-game')
    }
  }

}
</script>
