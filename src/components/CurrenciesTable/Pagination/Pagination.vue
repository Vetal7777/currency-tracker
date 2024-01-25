<template>
  <div class="flex w-full justify-center gap-4">
    <button
      v-for="(number, key) in paginationArray"
      :class="[
        'flex h-7 w-7 items-center justify-center rounded-full',
        { active: isActivePage(number) }
      ]"
      :disabled="isActivePage(number)"
      @click="$emit('goToPage', number)"
      :key="key"
    >
      {{ number }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PaginationProps } from './types'

const props = defineProps<PaginationProps>()

const isActivePage = (pageNumber: number) => pageNumber === props.page

const paginationArray = computed(() =>
  Array.from({ length: props.pagesQuantity }, (_, index) => index + 1)
)
</script>

<style lang="scss" scoped>
.active {
  @apply bg-base-red text-white;
}
</style>
