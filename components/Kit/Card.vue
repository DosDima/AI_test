<template>
  <div class="card">
    <slot name="card__header"/>
    <slot name="card__main"/>
    <slot name="card__footer"/>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  max-width: 320px;
  min-width: 320px;
  min-height: 320px;
  padding: 1em;
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: 1em;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}


</style>