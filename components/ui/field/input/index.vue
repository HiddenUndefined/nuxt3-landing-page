<script lang="ts" setup>
defineProps({
  // Label
  label: {
    type: String,
    required: true
  },
  // Model value
  modelValue: {
    type: [String, Number],
    required: true
  },
  // Attributes
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template lang="pug">
input.ui-field(
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
  :type="type"
  :id="id"
  :name="name"
  :disabled="disabled"
  :placeholder="label"
  required
)
</template>

<style lang="stylus" scoped>
</style>
