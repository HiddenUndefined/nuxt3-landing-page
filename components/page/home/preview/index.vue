<script lang="ts" setup></script>

<template lang="pug">
#about.component-wrapper
  // Wrapper: Info
  .info
    // Undertitle
    strong Branding | Image making
    // Title
    h1 Visual Designer
    // Description
    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis ducimus placeat rem.
  // Wrapper: Photo
  img(:src="'/images/photo.png'" alt="Main photo")
</template>

<style lang="stylus" scoped>
// Variables
$imageWidth = 486px
$imageHeight = 566px

// Style
.component-wrapper
  gap 64px
  padding-top 46px
  padding-bottom 46px
  display grid
  grid-template-columns 1fr
  align-items center
  justify-items center
  // Wrapper: Info
  .info
    dfx(column, flex-start, center)
    *
      text-align center
  // Image
  img
    max-width 100%
  // Adaptive
  // # 767px
  //+bpMin($media_mobile)
  // # 1079px
  +bpMin($media_tablet)
    grid-template-columns repeat(2, 1fr)
    // Wrapper: Info
    .info
      align-items flex-start
      *
        text-align left
</style>
