<script lang="ts" setup>
// Data
const data = [
  {
    image: '/images/works/1.jpg',
    title: 'Project title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    image: '/images/works/2.jpg',
    title: 'Project title',
    description: 'Lorem ipsum sit amet, consectetur adipisicing elit.'
  },
  {
    image: '/images/works/3.jpg',
    title: 'Project title',
    description: 'Lorem ipsum dolor sit amet, consectetur elit.'
  },
  {
    image: '/images/works/4.jpg',
    title: 'Project title',
    description: 'Lorem ipsum sit, consectetur adipisicing elit.'
  },
  {
    image: '/images/works/5.jpg',
    title: 'Project title',
    description: 'Lorem ipsum dolor sit amet, consectetur sit elit.'
  },
  {
    image: '/images/works/6.jpg',
    title: 'Project title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing eldolorit.'
  }
]
</script>

<template lang="pug">
#work.component-wrapper
  // Title
  h2 Latest work
  // Wrapper: Cards
  .cards
    // Cycle: Gallery Card
    ui-gallery-card(
      v-for="(card, key) in data"
      :key="`gallery-card-${ key }-key`"

      :image="card.image"
      :title="card.title"
      :description="card.description"
    )
</template>

<style lang="stylus" scoped>
.component-wrapper
  gap 54px
  padding-top 48px
  padding-bottom 48px
  // Title
  h2
    text-align center
  // Wrapper: Cards
  .cards
    width 100%
    gap 45px
    display grid
    align-items stretch
    grid-template-columns 1fr
  // Adaptive
  // 767px
  +bpMin($media_mobile)
    // Wrapper: Cards
    .cards
      grid-template-columns repeat(2, 1fr)
  // 1079px
  +bpMin($media_tablet)
    // Wrapper: Cards
    .cards
      grid-template-columns repeat(3, 1fr)
</style>
