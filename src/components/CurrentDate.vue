<template>
  <div
    class="rounded-xl border border-base-red bg-transparent px-4 py-1 text-base-red"
  >
    {{ formatFullDate(date) }}
  </div>
</template>

<script setup lang="ts">
import { useDateFormatter } from '@/composables/useDateFormatter'
import { useExchangeStore } from '@/store/exchange'
import { storeToRefs } from 'pinia'

const exchangeStore = useExchangeStore()
const dateForamtter = useDateFormatter()

const { date } = storeToRefs(exchangeStore)
const { formatFullDate } = dateForamtter
</script>
