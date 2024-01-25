import {
  FULL_DATE_IN_NUMBER_FORMAT,
  useDateFormatter
} from '@/composables/useDateFormatter'
import { getCurrenciesExchangeRatesFromApi } from '@/services/exchangeApi'
import type { CurrencyExchangeRate } from '@/services/exchangeApi/types'
import moment from 'moment'
import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { EditedCurrencyExchangeRateData } from './types'

export const useExchangeStore = defineStore('exchange', () => {
  const { formatDateData } = useDateFormatter()

  const exchangeDataInit = ref<CurrencyExchangeRate[]>([])
  const editedexchangeData = ref<EditedCurrencyExchangeRateData>({})
  const date = ref(new Date())

  const exchangeData = computed(() => {
    const currentDate = moment(date.value).format(FULL_DATE_IN_NUMBER_FORMAT)
    const editedDataArray = editedexchangeData.value[currentDate]

    if (editedDataArray) {
      return exchangeDataInit.value.map((item) => {
        const editedData = editedDataArray.find((data) => data.cc === item.cc)

        if (editedData) {
          return editedData
        } else {
          return item
        }
      })
    }

    return exchangeDataInit.value
  })

  const updateExchangeData = async () => {
    const data = await fetchExchangeData()

    if (data) {
      exchangeDataInit.value = data
    }
  }
  const updateExchangeDataItem = (
    cc: string,
    rate: number,
    currentDate: Date
  ) => {
    const key = moment(currentDate).format(FULL_DATE_IN_NUMBER_FORMAT)
    let currentDateArray = editedexchangeData.value[key] || []
    const currentDateData = exchangeDataInit.value.find(
      (item) => item.cc === cc
    ) as CurrencyExchangeRate

    const updateItem = { ...currentDateData, rate }
    const existingItemIndex = currentDateArray.findIndex(
      (item) => item.cc === cc
    )

    if (existingItemIndex !== -1) {
      currentDateArray[existingItemIndex] = updateItem
    } else {
      currentDateArray.push(updateItem)
    }

    editedexchangeData.value = {
      ...editedexchangeData.value,
      [key]: currentDateArray
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
  // Update exchangeData on change date
  watch(
    () => date.value,
    () => {
      updateExchangeData()
    },
    { immediate: true }
  )
  return { exchangeData, date, updateExchangeDataItem, editedexchangeData }
})
