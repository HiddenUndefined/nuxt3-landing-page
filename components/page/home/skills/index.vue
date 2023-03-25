<script lang="ts" setup>
// Interface
interface IPageHomeSkillModel {
  image: string
  title: string
  text: string
}

/**
 * Cards data
 */
const data: IPageHomeSkillModel[] = [
  {
    image: '/images/skills/pink.png',
    title: 'Product design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis doloribus non nulla perferendis vel, voluptate?'
  },
  {
    image: '/images/skills/red.png',
    title: 'Art direction',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis doloribus non nulla perferendis consectetur dolor.'
  },
  {
    image: '/images/skills/green.png',
    title: 'Visual design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis doloribus non vel!'
  }
]
</script>

<template lang="pug">
.component-wrapper
  // Cycle: Skill Card
  ui-skill-card.card(
    v-for="(card, key) in data"
    :key="`skill-card-${ key }-key`"

    :image="card.image"
    :title="card.title"
    :text="card.text"
  )
</template>

<style lang="stylus" scoped>
.component-wrapper
  gap 45px
  padding 56px 0
  display grid
  align-items stretch
  grid-template-columns 1fr
  // Adaptive
  // # 767px
  +bpMin($media_mobile)
    padding 66px 0
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
    padding 76px 0
    grid-template-columns repeat(3, 1fr)
    // Card
    .card:nth-child(1),
    .card:nth-child(2),
    .card:nth-child(3)
      grid-column inherit
</style>
