export type GetCurrenciesExchangeRates = (
  dateData: DateData
) => Promise<CurrencyExchangeRate[]>

export type DateData = {
  year: string
  month: string
  day: string
}

export type CurrencyExchangeRate = {
  r030: number
  txt: string
  rate: number
  cc: string
  exchangedate: string
}
