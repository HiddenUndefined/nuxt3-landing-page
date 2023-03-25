<script lang="ts" setup>
defineProps({
  // Attributes
  name: {
    type: String,
    required: false,
    default: null
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template lang="pug">
button.ui-button(
  :name="name"
  :disabled="disabled"
)
  slot
</template>

<style lang="stylus" scoped>
.ui-button
  width 100%
  height $element_height_mobile
  padding 12px 24px
  textSubtitle()
  line-height 1
  text-align center
  color $color_white
  background-color $color_black
  border none
  transition all .5s ease
  cursor pointer
  // Attributes
  // # Disabled
  &[disabled]
    opacity 0.75
    cursor not-allowed
  // State
  // # Hover
  &:hover
    background-color $color_green
  // Adaptive
  +bpMin($media_mobile)
    height $element_height_tablet
  +bpMin($media_tablet)
    height $element_height_desktop
</style>
