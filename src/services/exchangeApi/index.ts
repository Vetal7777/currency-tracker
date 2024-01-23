import { axiosInstance } from '@/services/config'
import { GetCurrenciesExchangeRates } from './types'

export const getCurrenciesExchangeRatesFromApi: GetCurrenciesExchangeRates =
  async ({ year, month, day }) => {
    return await axiosInstance.get(
      `/NBUStatService/v1/statdirectory/exchange?date=${year}${month}${day}&json`
    )
  }
