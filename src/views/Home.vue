<template>
  <div class="flex justify-center">
    <CurrenciesTable
      v-if="exchangeData.length"
      :list="exchangeData"
      @updateRate="({ cc, value }) => updateExchangeDataItem(cc, value, date)"
    />
  </div>
</template>

<script setup lang="ts">
import CurrenciesTable from '@/components/CurrenciesTable/CurrenciesTable.vue'
import { useExchangeStore } from '@/store/exchange'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const exchangeStore = useExchangeStore()

const { updateExchangeDataItem } = exchangeStore
const { exchangeData, date } = storeToRefs(exchangeStore)

const setTodayDate = () => {
  date.value = new Date()
}

onMounted(() => {
  setTodayDate()
})
</script>
