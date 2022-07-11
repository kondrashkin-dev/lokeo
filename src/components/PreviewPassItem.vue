<template lang="pug">
.item(:class="{ total: isTotal }")
  .item__title {{ title }}
  .item__content {{ content }}
    slot
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  content: String,
  isTotal: Boolean,
});
</script>

<style lang="stylus" scoped>
.item
  margin-bottom 13px
  font-size 16px
  line-height 19px
  &__title
    margin-bottom 10px
    color $gray-color
    font-weight 700
  &.total
    display flex
    flex-wrap wrap
    gap 6px
    align-items center
    margin-bottom 0
    .item__title
      margin-bottom 0
      color #c3c7cf
</style>
