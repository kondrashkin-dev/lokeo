<template lang="pug">
.preview-pass
  .preview-pass__container
    h2.preview-pass__title Ваш пропуск
    .preview-pass__body
      PreviewPassItem(v-for="(item,index) in items" 
        :key="index" 
        :title="item.title" 
        :content="item.content"
      )
      .total
        .total__title Пропуск
        .total__content
          PreviewPassItem(v-for="(item,index) in totalItems" 
            :key="index" 
            :title="item.title" 
            :content="item.content" 
            is-total
          )
          //- PreviewPassItem(title="Индетификатор:" 
          //-   :content="id.value"
          //-   is-total
          //- ) 
          //-   .id-load(v-if="id.load")
</template>

<script setup>
import PreviewPassItem from "./PreviewPassItem.vue";
const props = defineProps({
  pass: {
    type: Object,
    required: true,
  },
});
const items = [
  { title: "КПП", content: props.pass.kpp },
  { title: "Поселок и участок", content: "-" },
  { title: "Лицо", content: props.pass.user },
  { title: "Автомобиль", content: props.pass.vehicle },
];
const totalItems = [
  { title: "Тип проезжающего:", content: props.pass.travelerType },
  { title: "Тип пропуска:", content: props.pass.accessType },
  { title: "Срочность:", content: props.pass.urgency },
  {
    title: "Продукт, по которому предоставляется пропуск:",
    content: "Обслуживание участков",
  },
];
</script>

<style lang="stylus" scoped>
@keyframes loading
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)

$border-radius = 0 25px 25px 0
.preview-pass
  display flex
  flex 0 0 338px
  height 100%
  border-radius $border-radius
  &::before
    width 34px
    height 100%
    padding-top 29px
    padding-bottom 17px
    background-image url("@/assets/images/icons/shadow.svg")
    content ''
  &__container
    width 100%
    margin 10px
    padding 35px 32px
    border 1px dashed #78b62c
    border-radius $border-radius
.total
  &__title
    margin-bottom 10px
    color $gray-color
    font-weight 700
  &__content
    display flex
    flex-direction column
    gap 13px
    align-items flex-start
.id-load
  width 20px
  height 19px
  background-image url("@/assets/images/icons/load.svg")
  animation 2s linear infinite loading
</style>
