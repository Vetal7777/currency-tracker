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
  const dateData = ref<DateData | null>(null)

  const formatDateData = (date: Date): DateData => {
    const data = {
      year: String(moment(date).year()),
      month: formatNumberWithZero(moment(date).month() + 1),
      day: formatNumberWithZero(moment(date).date())
    }

    return data
  }
  const initStore = async () => {
    const currentDate = new Date()

    dateData.value = formatDateData(currentDate)

    const data = await fetchExchangeData(dateData.value)

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
  const fetchExchangeData = async (date: DateData) => {
    try {
      const { data } = await getCurrenciesExchangeRatesFromApi(date)

      return data
    } catch (error) {
      console.error(`Couldn't fetch exchange data`)

      return null
    }
  }

  onMounted(() => {
    const storeNotInit = !dateData.value && !exchangeData.value.length

    if (storeNotInit) {
      initStore()
    }
  })

  return { exchangeData, dateData }
})
