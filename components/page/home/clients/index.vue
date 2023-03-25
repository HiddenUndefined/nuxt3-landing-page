<script lang="ts" setup>
// noinspection ES6UnusedImports
import googleLogo from '~/assets/images/svg/google.svg'
// noinspection ES6UnusedImports
import nikeLogo from '~/assets/images/svg/nike.svg'
// noinspection ES6UnusedImports
import samsungLogo from '~/assets/images/svg/samsung.svg'
// noinspection ES6UnusedImports
import appleLogo from '~/assets/images/svg/apple.svg'
// noinspection ES6UnusedImports
import intercomLogo from '~/assets/images/svg/intercom.svg'
// noinspection ES6UnusedImports
import adidasLogo from '~/assets/images/svg/adidas.svg'
</script>

<template lang="pug">
.component-wrapper
  google-logo
  nike-logo
  samsung-logo
  apple-logo
  intercom-logo
  adidas-logo
  //ui-svg-wrapper(name="google")
  //ui-svg-wrapper(name="nike")
  //ui-svg-wrapper(name="samsung")
  //ui-svg-wrapper(name="apple")
  //ui-svg-wrapper(name="intercom")
  //ui-svg-wrapper(name="adidas")
</template>

<style lang="stylus" scoped>
.component-wrapper
  gap 48px
  padding-top 48px
  padding-bottom 48px
  display grid
  align-items center
  justify-items center
  grid-template-columns repeat(2, 1fr)
  // Adaptive
  // # 767px
  +bpMin($media_mobile)
    padding-top 68px
    padding-bottom 68px
    grid-template-columns repeat(3, 1fr)
  // # 1079px
  +bpMin($media_tablet)
    grid-template-columns repeat(6, 1fr)
</style>
