<template>
  <div>
    <div class="card border-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">{{player.name}}</div>
      <div class="card-body text-primary">
        <p class="card-text">Your Point</p>
        <h5 class="card-title">{{player.point}}</h5>
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
