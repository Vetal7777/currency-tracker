<template>
  <div
    class="grid min-w-96 grid-cols-2 gap-4 overflow-hidden rounded-xl border p-3 text-xs shadow-lg"
  >
    <!-- Filter by name -->
    <FilterInput v-model="filterData" />
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
      :editMode="isEditMode(index)"
      @edit="(status) => onEdit(status, index)"
      @updateRate="(value) => $emit('updateRate', { cc, value })"
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
import FilterInput from '@/components/CurrenciesTable/FilterInput/FilterInput.vue'
import Pagination from '@/components/CurrenciesTable/Pagination/Pagination.vue'
import Row from '@/components/CurrenciesTable/Row/Row.vue'
import usePagination from '@/composables/usePagination'
import type { CurrencyExchangeRate } from '@/services/exchangeApi/types'
import { computed, ref, watch } from 'vue'
import type { CurrenciesTableProps } from './types'

const pagination = usePagination()
const props = defineProps<CurrenciesTableProps>()

const { goToPage, setData } = pagination

const filterData = ref('')
const editDataIndex = ref<number | null>(null)

const filteredList = computed(() =>
  props.list.filter((rate) =>
    rate.cc.toLowerCase().includes(filterData.value.toLowerCase())
  )
)

const page = computed(() => pagination.page.value)
const paginatedData = computed<CurrencyExchangeRate[]>(
  () => pagination.paginatedData.value as CurrencyExchangeRate[]
)
const pagesQuantity = computed(() => pagination.pagesQuantity.value)
const showPagination = computed(() => Boolean(pagesQuantity.value - 1))

const isEditMode = (index: number) => editDataIndex.value === index
const onEdit = (status: boolean, index: number) => {
  if (status) {
    editDataIndex.value = index
  } else {
    editDataIndex.value = null
  }
}

// If list edit reset data
watch(
  () => filteredList.value,
  () => {
    setData(filteredList.value)
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.td {
  @apply rounded-xl px-5 py-3;
}
</style>
