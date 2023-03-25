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
  text: {
    type: String,
    required: true
  }
})
</script>

<template lang="pug">
.skill-card
  // Image
  img(:src="image" :alt="`Skill: ${ title }`")
  // Title
  h3 {{ title }}
  // Text
  p {{ text }}
</template>

<style lang="stylus" scoped>
.skill-card
  width 100%
  padding 60px 40px
  dfx(column, flex-start, center)
  // Image
  img
    margin-bottom 63px
  // Title
  h3
    text-align center
    margin-bottom 19px
  // Text
  p
    text-align center
</style>
