<script lang="ts" setup>
// Interface
interface IPageHomeFeedbackModel {
  text: string
  authorImage: string
  authorName: string
}

/**
 * Cards data
 */
const data: IPageHomeFeedbackModel[] = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus non nulla perferendis vel, voluptate?',
    authorImage: '/images/feedback/1.png',
    authorName: 'Kate Lap, Google'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis doloribus non nulla perferendis consectetur dolor.',
    authorImage: '/images/feedback/2.png',
    authorName: 'Lisa Smith, Amazon'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis doloribus non vel!',
    authorImage: '/images/feedback/3.png',
    authorName: 'Amanda Green, Netflix'
  }
]
</script>

<template lang="pug">
.component-wrapper
  // Title
  h2 Clients
  // Wrapper: Cards
  .cards
    // Cycle: Feedback Card
    ui-feedback-card.card(
      v-for="(card, key) in data"
      :key="`skill-card-${ key }-key`"

      :text="card.text"
      :author-image="card.authorImage"
      :author-name="card.authorName"
    )
</template>

<style lang="stylus" scoped>
.component-wrapper
  gap 54px
  padding-top 56px
  padding-bottom 56px
  // Title
  h2
    text-align center
  // Wrapper: Cards
  .cards
    gap 45px
    display grid
    grid-template-columns 1fr
    align-items stretch
  // Adaptive
  // # 767px
  +bpMin($media_mobile)
    padding-top 82px
    padding-bottom 82px
    // Wrapper: Cards
    .cards
      grid-template-columns repeat(4, 1fr)
    // Card
    .card:nth-child(1)
      grid-column 1 / 3
    .card:nth-child(2)
      grid-column 3 / 5
    .card:nth-child(3)
      grid-column 2 / 4
  // # 1079px
  +bpMin($media_tablet)
    padding-top 122px
    padding-bottom 122px
    // Wrapper: Cards
    .cards
      grid-template-columns repeat(3, 1fr)
    // Card
    .card:nth-child(1),
    .card:nth-child(2),
    .card:nth-child(3)
      grid-column inherit
</style>
