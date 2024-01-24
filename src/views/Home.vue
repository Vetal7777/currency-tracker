<template>
  <div class="flex justify-center">
    <CurrenciesTable v-if="exchangeData.length" />
  </div>
</template>

<script setup lang="ts">
import CurrenciesTable from '@/components/CurrenciesTable/CurrenciesTable.vue'
import { useExchangeStore } from '@/store/exchange'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const exchangeStore = useExchangeStore()

const { exchangeData, date } = storeToRefs(exchangeStore)

const setTodayDate = () => {
  date.value = new Date()
}

onMounted(() => {
  setTodayDate()
})
</script>
