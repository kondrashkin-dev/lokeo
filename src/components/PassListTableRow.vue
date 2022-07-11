<template lang="pug">
tr.row
  td.col {{pass.id}}
  td.col {{pass.fio}}
  td.col {{pass.vehicle}}
  td.col.col-id-type {{pass.idType}}
  td.col
    .col__kpp {{kpp}}
  td.col
    .col__dropdown Активен
  td.col.col-copy
    .col-copy__icon
  td.col.col-edit
    .col-edit__icon
</template>

<script setup>
import { computed } from "@vue/reactivity";
const props = defineProps({
  pass: {
    id: Number,
    fio: String,
    vehicle: String,
    idType: String,
    kpp: Array,
  },
});
const kpp = computed(() => props.pass.kpp.join(" "));
</script>

<style lang="stylus" scoped>
$border = 1px solid #e8e8e8
$border-radius = 8px
$border-radius_sm = 4px
$green-color = #7ea613
.row
  color $green-color
  font-weight 800
  font-size 18px
  line-height 21px
.col
  padding-top 22px
  padding-bottom 22px
  border-top $border
  border-bottom $border
  &:first-child
    padding-left 25px
    border-left $border
    border-top-left-radius $border-radius
    border-bottom-left-radius $border-radius
  &:last-child
    padding-right 16px
    border-right $border
    border-top-right-radius $border-radius
    border-bottom-right-radius $border-radius
  &-id-type
    color #2a341d
    font-weight 400
  &__kpp
    max-width 148px
  &__dropdown
    display flex
    align-items center
    justify-content space-between
    padding 10px 10px 10px 13px
    font-weight 700
    font-size 16px
    line-height 19px
    background rgba(120, 182, 44, 0.05)
    border-radius $border-radius_sm
    cursor pointer
    &::after
      width 10px
      height 5px
      background-image url('@/assets/images/icons/arrow-down.svg')
      background-repeat no-repeat
      content ''
  &-copy
    width 16px
    padding-left 20px
    &__icon
      width 16px
      height 16px
      background-image url('@/assets/images/icons/copy.svg')
      cursor pointer
  &-edit
    width 14px
    padding-left 18px
    &__icon
      width 14px
      height 14px
      background-image url('@/assets/images/icons/edit.svg')
      cursor pointer
</style>
