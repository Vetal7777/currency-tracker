import { getCurrenciesExchangeRatesFromApi } from '@/services/exchangeApi'
import type {
  CurrencyExchangeRate,
  DateData
} from '@/services/exchangeApi/types'
import moment from 'moment'
import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useExchange = defineStore('exchange', () => {
  const exchangeData = ref<CurrencyExchangeRate[]>([])
  const date = ref(new Date())

  const formatDateData = (date: Date): DateData => {
    const data = {
      year: String(moment(date).year()),
      month: formatNumberWithZero(moment(date).month() + 1),
      day: formatNumberWithZero(moment(date).date())
    }

    return data
  }
  const initStore = async () => {
    const data = await fetchExchangeData()

    if (data) {
      exchangeData.value = data
    }
  }
  const formatNumberWithZero = (number: number) => {
    let strNumber = String(number)

    if (strNumber.length < 2) {
      strNumber = '0' + strNumber
    }

    return strNumber
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

  onMounted(() => {
    const storeNotInit = !exchangeData.value.length

    if (storeNotInit) {
      initStore()
    }
  })

  return { exchangeData, date }
})
