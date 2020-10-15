<template>
  <div id="app">
    <h1>Good {{greetings}} Racer! Are you ready to race?</h1>
    <button @click="ready">Hell yeah!</button>
    <button @click="nope"> I'm not ready yet </button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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

<style>

</style>
