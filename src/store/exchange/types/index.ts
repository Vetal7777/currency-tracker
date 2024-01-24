import { CurrencyExchangeRate } from '@/services/exchangeApi/types'

export type EditedCurrencyExchangeRateData = {
  [key in string]: CurrencyExchangeRate[]
}
