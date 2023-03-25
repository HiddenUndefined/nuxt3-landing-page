<script lang="ts" setup></script>

<template lang="pug">
.component-wrapper
  // Wrapper: Logotype
  nuxt-link.logotype(to="/")
    // Image
    img(:src="'/images/logotype.png'" alt="Logotype")
    // Name
    strong Logotype
  // Wrapper: Navigation
  .navigation
    // Links
    nuxt-link.link(to="/#about") About
    nuxt-link.link(to="/#work") Work
    nuxt-link.link(to="/#contact") Contact
</template>

<style lang="stylus" scoped>
.component-wrapper
  padding-top 26px
  padding-bottom 26px
  background-color $color_white
  dfx(row, space-between, center)
  // Logotype
  .logotype
    gap 24px
    dfx(row, $ai: center)
    // Image
    img
      mmSize(30px, 30px)
  // Wrapper: Navigation
  .navigation
    gap 48px
    dfx(row, flex-end, center)
    // Link
    .link
      textBody()
      // & Hover
      &:hover
        text-decoration underline
</style>
