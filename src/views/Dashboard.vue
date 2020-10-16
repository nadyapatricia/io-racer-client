<template>
  <div id="home-page" class="container-fluid text-center d-flex justify-content-center align-items-center"
    style="min-height: 100vh; color: rgb(201, 96, 96);">
    <div>
      <h1>io.racer</h1>
      <h3 class="mb-3">Enter player name</h3>
      <input type="text" class="input" style="color: rgb(121, 62, 62);" v-model="name">
      <div class="line-box">
        <div class="line"></div>
      </div> <br>
      <button class="btn btn-info mt-3" type="submit" @click="register">Play now</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    register () {
      this.$socket.emit('newPlayer', { name: this.name, point: 0 })
      localStorage.setItem('name', this.name)
      this.$router.push('/board-game')
    }
  }
}
</script>
<style scoped>
  #home-page {
    background-image: linear-gradient(to bottom right, #D8E8EB,#FFBD8B);
  }
    .container-fluid {
    padding: 4% 7% 3%;
  }
  .input {
    width: 100%;
    padding: 10px;
    background: transparent;
    border: none;
    outline: none;
  }
  .line-box {
    position: relative;
    width: 100%;
    height: 2px;
    background: #BCBCBC;
  }
  .line {
    position: absolute;
    width: 0%;
    height: 2px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background: rgb(201, 96, 96);
    transition: ease .6s;
  }
  .input:focus + .line-box .line {
    width: 100%;
  }
</style>
