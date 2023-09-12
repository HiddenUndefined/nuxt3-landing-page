<template lang="pug">
.page-wrapper
  page-home-preview
  page-home-clients
  page-home-skills
  page-home-gallery
  page-home-feedback
  page-home-contact
</template>

<script lang="ts" setup>
/**
 * Page head
 */
useHead({
  title: 'Landing Page',
  meta: [
    { name: 'description', content: 'Amazing landing page with Nuxt 3!' }
  ]
})
/**
 * Page meta
 */
definePageMeta({

})
</script>
