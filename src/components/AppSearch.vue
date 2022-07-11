<template lang="pug">
form.search(@submit.prevent)
  button(type="submit").search__submit
  input(type="search").search__field(placeholder="Поиск")
</template>

<style lang="stylus" scoped>
.search
  display flex
  width 292px
  border 1px solid #ededed
  border-radius 4px
  &__field
    display flex
    align-items center
    justify-content space-between
    width 100%
    height 30px
    color #c3c7cf
    font-weight 400
    font-size 16px
    line-height 19px
    border none
    outline none
  &__submit
    padding 13px
    background-color transparent
    background-image url("@/assets/images/icons/search.svg")
    background-repeat no-repeat
    background-position 50% 50%
    border none
    cursor pointer
</style>

<script setup></script>
