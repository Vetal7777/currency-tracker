<template>
  <div class="grid grid-cols-2 overflow-hidden rounded-xl border p-1 text-xs">
    <!-- Table Head -->
    <div class="col-span-2 grid grid-cols-2">
      <div class="td bg-base-red text-white">Currecy Name</div>
      <div class="td">Exchange Rate</div>
    </div>
    <!-- Table Main -->
    <Row
      v-for="({ cc, rate }, index) in paginatedData"
      :title="cc"
      :value="rate"
      :key="index"
    />
    <!-- Pagination -->
    <div
      v-if="showPagination"
      class="col-span-2 flex items-center justify-center px-4 pb-2 pt-4"
    >
      <Pagination
        :page="page"
        :pagesQuantity="pagesQuantity"
        @goToPage="goToPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Pagination from '@/components/CurrenciesTable/Pagination/Pagination.vue'
import Row from '@/components/CurrenciesTable/Row/Row.vue'
import usePagination from '@/composables/usePagination'
import { CurrencyExchangeRate } from '@/services/exchangeApi/types'
import { useExchangeStore } from '@/store/exchange'

import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'

const exchangeStore = useExchangeStore()
const pagination = usePagination()

const { exchangeData } = storeToRefs(exchangeStore)
const { goToPage, setData } = pagination

const page = computed(() => pagination.page.value)
const paginatedData = computed<CurrencyExchangeRate[]>(
  () => pagination.paginatedData.value as CurrencyExchangeRate[]
)
const pagesQuantity = computed(() => pagination.pagesQuantity.value)
const showPagination = computed(() => Boolean(pagesQuantity.value - 1))

// If list edit reset data
watch(
  () => exchangeData.value,
  () => {
    setData(exchangeData.value)
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.td {
  @apply rounded-xl px-5 py-3;
}
</style>
