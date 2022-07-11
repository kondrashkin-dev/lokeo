<template lang="pug">
.app-layout
  AppMenu
  section.app-layout__section
    slot
</template>

<script setup>
import AppMenu from "@/layouts/AppMenu";
</script>

<style lang="stylus" scoped>
.app-layout
  display flex
  height 100vh
  overflow hidden
  &__section
    flex 1 1 auto
    overflow-y scroll
</style>
