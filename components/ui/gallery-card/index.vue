<script lang="ts" setup>
// Component props
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template lang="pug">
.gallery-card
  // Preview
  .preview(:style="`background-image: url('${ image }')`")
  // Title
  strong {{ title }}
  // Description
  p {{ description }}
</template>

<style lang="stylus" scoped>
.gallery-card
  width 100%
  gap 10px
  dfx(column, flex-start, stretch)
  // Preview
  .preview
    min-height 330px
    margin-bottom 15px
    background-position center
    background-size cover
    background-repeat no-repeat
  // Title
  // Description
</style>
