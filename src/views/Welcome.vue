<template>
  <div>
    <h1>Good {{greetings}} Racer! Are you ready to race?</h1>
    <button @click="ready" class="btn btn-info btn-sm ">Hell yeah!</button>
    <button @click="nope" class="btn btn-danger btn-sm ml-3"> I'm not ready yet </button>
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
</style>
