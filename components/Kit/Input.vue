<template>
  <div>
    <label for="name">{{ label }}</label>
    <input
        :id="'name'"
        v-model="v"
        :type="type"
        :name="'name'"
        required
        :minlength="minlength"
        :maxlength="maxlength"
        size="10"
        @input="$emit('update:modelValue', v)"
        @keydown.enter="$emit('update:modelValue', v)"
    >
  </div>
</template>

<script setup lang="ts">
defineEmits(['update:modelValue']);
defineProps({
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

const v = ref<string>('')

</script>

<style scoped>

input {
  width: 100%;
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
