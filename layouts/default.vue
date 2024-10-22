<template>
  <div class="layout">
    <slot />
    <EffectCircles/>
  </div>
</template>

<style scoped>
.layout{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

</style>
