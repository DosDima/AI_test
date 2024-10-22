<template>
  <ClientOnly>
    <Teleport to="body">
      <div
          v-show="localComputed"
          class="overlay"
          @click.self="emit('update:modelValue')"
      >
        <slot name="overlay__content"/>
      </div>
    </Teleport>
  </ClientOnly>

</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const localComputed = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
});


</script>

<style scoped>

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(184, 184, 184, 0.2);
  backdrop-filter: blur();
}
</style>
