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
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template lang="pug">
textarea.ui-field(
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
  :id="id"
  :name="name"
  :disabled="disabled"
  :placeholder="label"
  :required="true"
)
</template>

<style lang="stylus" scoped>
.ui-field
  min-height 215px
  max-height 215px
  resize none
</style>
