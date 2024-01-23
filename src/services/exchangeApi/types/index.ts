export type GetCurrenciesExchangeRates = (
  dateData: DateData
) => Promise<GetCurrenciesExchangeRatesResponse>

export type DateData = {
  year: string
  month: string
  day: string
}

export type GetCurrenciesExchangeRatesResponse = {
  data: CurrencyExchangeRate[]
}

export type CurrencyExchangeRate = {
  r030: number
  txt: string
  rate: number
  cc: string
  exchangedate: string
}
