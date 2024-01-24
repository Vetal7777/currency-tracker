<template>
  <div class="col-span-2 grid grid-cols-2">
    <div class="text-base-red td">{{ title }}</div>
    <div class="td">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
import { RowProps } from './types'

defineProps<RowProps>()
</script>

<style lang="scss" scoped>
.td {
  @apply rounded-xl px-5 py-3;
}
</style>
