<template>
  <div class="input__wrapper">
    <label class="input__label" :for="name">{{ label }}</label>
    <input
        v-model="localComputed"
        :type="type"
        :name="name"
        required
        :minlength="minlength"
        :maxlength="maxlength"
        size="10"
    >
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: 'success',
  },
  maxlength: {
    type: Number,
    default: 8,
  },
  minlength: {
    type: Number,
    default: 0,
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

.input__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input {
  width: 100%;
  min-width: 100%;
  color: var(--color-text);
  background-color: var(--color-background-soft);
  font-size: 2rem;
  border-radius: .2em;
  border-color: var(--color-border);
}

input:focus {
  border-color: var(--color-border-hover);
}

</style>
