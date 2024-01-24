<template>
  <div
    class="row relative col-span-2 grid grid-cols-2 overflow-hidden rounded-xl bg-transparent transition-all dark:hover:bg-base-red"
  >
    <div class="td text-base-red">{{ title }}</div>
    <div class="td">{{ value }}</div>
    <button
      class="edit-status absolute right-5 flex h-full translate-x-32 cursor-pointer items-center transition-all"
    >
      Edit
    </button>
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

.row:hover {
  .td {
    @apply dark:text-white;
  }
  .edit-status {
    @apply translate-x-0;
  }
}
</style>
