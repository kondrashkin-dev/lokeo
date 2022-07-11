<template lang="pug">
.wrapper
    .container
      section.content
        .content__container
          header.header
            h1.title(title="Пропуск") Пропуск
          .content__body  
            FormKit(
              type="select"
              label="Тип проезжающего"
              name="traveler-type"
              :options="TravelerTypes"
              input-class="app-dropdown"
              v-model="pass.travelerType"
            )
            FormKit(
              type="select"
              label="Срочность"
              name="urgency"
              :options="UrgencyList"
              input-class="app-dropdown"
              v-model="pass.urgency"
            )
            FormKit(
              type="select"
              label="Тип пропуска"
              name="access-type"
              :options="AccessType"
              input-class="app-dropdown"
              label-class="bold"
              v-model="pass.accessType"
            )
        pre {{pass}}
        PreviewPass(:pass="pass")
</template>

<script setup>
import PreviewPass from "@/components/PreviewPass.vue";
import { reactive, ref } from "vue";
import { useID } from "@/use/useID";
import { useLoginStore } from "@/stores/login";
import {
  TravelerTypes,
  UrgencyList,
  AccessType,
  IdentificationRFI,
  KPP,
  Vehicle,
} from "@/stores/test.json";
const store = useLoginStore();
const pass = reactive({
  id: useID,
  user: store.userData?.user?.FIO,
  vehicle: Vehicle,
  travelerType: "Житель",
  urgency: "Постоянный",
  accessType: "RFID",
  kpp: KPP,
});
</script>

<style lang="stylus" scoped>
.wrapper
  background-color #f5f5f5
.container
  max-width 1534px
  height 100vh
  margin 0 auto
  padding 20px 0
.content
  display flex
  justify-content space-between
  height 100%
  background-color #fff
  border-radius 0 26px 26px 0
  &::before
    width 158px
    height 100%
    background linear-gradient(177.59deg, #6a8639 -6.24%, #beb732 119.12%), #7ea613
    border-radius 26px 0 0 26px
    content ''
  &__container
    flex 1 1 auto
    padding 25px 60px
  &__body
    display flex
    flex-wrap wrap
    gap 8px
    margin-top 45px
.title
  display flex
  gap 9px
  align-items center
  color #2a341d
  font-weight 900
  font-size 30px
  // font-family "Roboto", sans-serif
  line-height 35px
  &::after
    width 19px
    height 19px
    background-image url('@/assets/images/icons/question.svg')
    content ''
</style>
