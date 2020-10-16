<template>
  <div>
    <div class="game-items d-flex justify-content-around">
    <div class="score-board mt-5">
        <div class="card border-dark mb-3 text-center" style="width: 8rem;">
        <div class="card-header border-dark" style="background-color: #00C9B7 ;">{{player.name}}</div>
        <div class="card-body text-dark">
            <p class="card-text">{{player.point}}</p>
        </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  props: ['player']
}
</script>

<style>

</style>
