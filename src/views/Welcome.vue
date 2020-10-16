<template>
  <div id="game-rules" style="height: 100vh;" class="d-flex flex-column justify-content-center align-items-center">
    <h1>Good {{greetings}} Racer!</h1>
    <p>Are you ready to race?</p>
    <div class="d-flex flex-row justify-content-center align-items-center">
    <button @click="ready" class="btn btn-info btn-sm my-2 mr-3">Hell yeah!</button>
    <button @click="nope" class="btn btn-danger btn-sm"> I'm not ready yet </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      greetings: ''
    }
  },
  methods: {
    ready () {
      this.$router.push('/dashboard')
    },
    nope () {
      console.log('hemmmm')
    }
  },
  created () {
    const a = new Date()
    const time = a.getHours()
    if (time > 18) {
      this.greetings = 'Evening'
    } else if (time >= 5 && time < 10) {
      this.greetings = 'Morning'
    } else if (time >= 10 && time < 16) {
      this.greetings = 'Day'
    } else if (time >= 16 && time <= 18) {
      this.greetings = 'Afternoon'
    }
  }
}
</script>

<style scopre>
  h1 {
    font-family: 'Montserrat', sans-serif;
  }
  #game-rules {
    background-image: linear-gradient(to bottom right, #d3cee3,#e9e4f0);
  }
</style>
