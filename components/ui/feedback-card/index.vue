<script lang="ts" setup>
// Component props
defineProps({
  text: {
    type: String,
    required: true
  },
  authorImage: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  }
})
</script>

<template lang="pug">
.feedback-card
  // Text
  strong {{ text }}
  // Wrapper: Author
  .author-wrapper
    // Image
    img(:src="authorImage" :alt="`${ authorName } review`")
    // Name
    p {{ authorName }}
</template>

<style lang="stylus" scoped>
.feedback-card
  width 100%
  min-height 380px
  padding 24px 28px
  background-color $color_grey
  dfx(column, space-between, flex-start)
  // Text
  strong
    margin-bottom 48px
  // Wrapper: Author
  .author-wrapper
    width 100%
    gap 18px
    margin-top auto
    dfx(row, flex-start, center)
</style>
