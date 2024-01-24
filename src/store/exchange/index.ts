import { useDateFormatter } from '@/composables/useDateFormatter'
import { getCurrenciesExchangeRatesFromApi } from '@/services/exchangeApi'
import type { CurrencyExchangeRate } from '@/services/exchangeApi/types'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useExchangeStore = defineStore('exchange', () => {
  const { formatDateData } = useDateFormatter()

  const exchangeData = ref<CurrencyExchangeRate[]>([])
  const date = ref(new Date())

  const updateExchangeData = async () => {
    const data = await fetchExchangeData()

    if (data) {
      exchangeData.value = data
    }
  }

  const fetchExchangeData = async () => {
    try {
      const { data } = await getCurrenciesExchangeRatesFromApi(
        formatDateData(date.value)
      )

      return data
    } catch (error) {
      console.error(`Couldn't fetch exchange data`)

      return null
    }
  }

  watch(
    () => date.value,
    () => {
      updateExchangeData()
    },
    { immediate: true }
  )

  return { exchangeData, date }
})
