<template>
  <div class="flex w-full justify-center gap-4">
    <button
      v-for="number in Array.from(
        { length: pagesQuantity },
        (elem, index) => index + 1
      )"
      :class="[
        'flex h-7 w-7 items-center justify-center rounded-full',
        { active: isActivePage(number) }
      ]"
      :disabled="isActivePage(number)"
      @click="$emit('goToPage', number)"
    >
      {{ number }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { PaginationProps } from './types'

const props = defineProps<PaginationProps>()

const isActivePage = (pageNumber: number) => pageNumber === props.page
</script>

<style lang="scss" scoped>
.active {
  @apply bg-base-red text-white;
}
</style>
