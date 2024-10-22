<template>
  <button
      class="btn"
      :class="color"
      :style="{ height: height + 'px' }"
      @click.stop="$emit('click-on-btn')"
  >{{ text }}
  </button>
</template>

<script setup lang="ts">
defineEmits(['click-on-btn']);
defineProps({
  text: {
    type: String,
    default: 'Ok',
  },
  color: {
    type: String,
    default: 'success',
  },
  height: {
    type: Number,
    default: 42,
  },
});

</script>

<style scoped>

.success {
  color: var(--color-success);
  border-color: var(--color-success);
}

.success:hover, .success:focus {
  outline: 0;
  box-shadow: 0 0 10px 0 var(--color-success) inset, 0 0 10px 4px var(--color-success);
}

.info {
  color: var(--color-info);
  border-color: var(--color-info);
}

.info:hover, .info:focus {
  outline: 0;
  box-shadow: 0 0 10px 0 var(--color-info) inset, 0 0 10px 4px var(--color-info);
}

.danger {
  color: green;
  border-color: #3498db;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
}

.danger:hover, .danger:focus {
  outline: 0;
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}

.btn {
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 0.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  letter-spacing: .1em;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  transition: all 150ms ease-in-out;
  -webkit-transition: all 150ms ease-in-out;
}

.btn:hover, .btn:focus {
  outline: 0;
}

</style>
