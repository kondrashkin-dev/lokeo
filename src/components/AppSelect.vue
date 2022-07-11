<template lang="pug">
select.app-dropdown
  option(v-for="option in options" :value="option" @change="$emit('update:modelValue')") {{option}}
</template>
<script setup>
const props = defineProps({ options: Array });
</script>
<style lang="stylus">
.app-dropdown
  background-image url('@/assets/images/icons/dropdown-arrow.svg')
  background-repeat no-repeat
  background-position right 15px top 50%
  cursor pointer
  appearance none
</style>
