<template lang="pug">
AppLayout
  .wrapper
    header.header
      .header__body
        h1.title(title="Пропуски") Пропуски
        button(type="button" @click="goToAddPass").add-pass-btn Создать пропуск
      AppSearch
    table
      tr
        th(v-for="(title,index) in tableTitles" :key="index" ) {{title}}
      PassListTableRow(v-for="pass in PassList" :key="pass.id" :pass="pass")
</template>

<script setup>
import { useRouter } from "vue-router";

import { storeToRefs } from "pinia";
import { usePassListStore } from "@/stores";

import AppLayout from "@/layouts/AppLayout";
import PassListTableRow from "@/components/PassListTableRow.vue";
import AppSearch from "@/components/AppSearch.vue";

const router = useRouter();
const goToAddPass = () => router.push({ name: "AddPass" });

const store = usePassListStore();
const { PassList } = storeToRefs(store);

const tableTitles = [
  "Идентификатор",
  "Лицо",
  "Автомобиль",
  "Идентификация",
  "КПП",
  "Статус",
];
</script>
<style lang="stylus" scoped>
.wrapper
  padding 45px 92px 45px 29px
.header
  display flex
  align-items center
  justify-content space-between
  width 100%
  &__body
    display flex
    gap 7px
    align-items center
    justify-content space-between
.title
  display flex
  gap 9px
  align-items center
  justify-content center
  color #262626
  font-weight 900
  font-size 40px
  line-height 47px
  text-align center
  &::after
    width 19px
    height 19px
    background-image url('@/assets/images/icons/question.svg')
    content ''
.add-pass-btn
  display flex
  gap 10px
  align-items center
  justify-content center
  padding 11px 15px 10px
  color #7ea613
  font-weight 600
  font-size 16px
  line-height 19px
  background-color transparent
  border none
  cursor pointer
  &::before
    width 14px
    height 14px
    background-image url('@/assets/images/icons/add.svg')
    content ''
table
  width 100%
  text-align left
  border-spacing 0
  th
    padding-bottom 10px
    font-weight 600
    font-size 16px
    line-height 19px
</style>
