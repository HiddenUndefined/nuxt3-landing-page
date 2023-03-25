<script lang="ts" setup>
// (start) Import: Icons
import linkedLogo from '~/assets/images/svg/linkedin.svg?component'
import facebookLogo from '~/assets/images/svg/facebook.svg?component'
import instagramLogo from '~/assets/images/svg/instagram.svg?component'
import twitterLogo from '~/assets/images/svg/twitter.svg?component'
import githubLogo from '~/assets/images/svg/github.svg?component'
// (end) Import: Icons

// Components
defineComponent({
  linkedLogo,
  facebookLogo,
  instagramLogo,
  twitterLogo,
  githubLogo
})

// Variables
const formFields = reactive({
  name: null,
  email: null,
  message: null
})
</script>

<template lang="pug">
.component-wrapper
  // Wrapper: Info
  .info
    // Title
    h2 Lets work together
    // Description
    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae consequatur cumque dicta eveniet labore libero magnam nostrum praesentium quaerat? Assumenda autem commodi deserunt ea eaque earum ipsum minima!
    // Wrapper: Socials Links
    .links
      // Link: linkedin
      nuxt-link.link(to="#" target="_blank")
        linked-logo
      // Link: facebook
      nuxt-link.link(to="#" target="_blank")
        facebook-logo
      // Link: instagram
      nuxt-link.link(to="#" target="_blank")
        instagram-logo
      // Link: twitter
      nuxt-link.link(to="#" target="_blank")
        twitter-logo
      // Link: github
      nuxt-link.link(to="#" target="_blank")
        github-logo
  // Wrapper: Form
  .form
    ui-field-input(
      id="form_fields-name"
      name="name"

      label="Name"

      v-model="formFields.name"
    )
    ui-field-input(
      id="form_fields-email"
      name="email"

      label="Email"

      v-model="formFields.email"
    )
    ui-field-textarea(
      id="form_fields-message"
      name="message"

      label="Type your message here"

      v-model="formFields.message"
    )
    // Submit
    ui-button Submit
</template>

<style lang="stylus" scoped>
.component-wrapper
  gap 54px
  padding-top 48px
  padding-bottom 148px
  display grid
  align-items flex-start
  grid-template-columns 1fr
  // Wrapper: Info
  .info
    gap 24px
    dfx(column, flex-start, flex-start)
  // Wrapper: Social links
  .links
    gap 14px
    margin-top 20px
    dfx(row, flex-start, center, wrap)
    // Link
    .link
      mmSize(32px, 32px)
      dfx(row, center, center)
      transition fill .5s ease
      // & Hover
      &:hover
        fill $color_green
  // Wrapper: Form
  .form
    gap 18px
    dfx(column, flex-start, flex-start)
    .ui-button
      margin-top 26px
  // Adaptive
  // # 1079px
  +bpMin($media_tablet)
    gap 148px
    grid-template-columns 420px calc(100% - 420px - 148px)
</style>
