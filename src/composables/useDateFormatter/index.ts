import { DateData } from '@/services/exchangeApi/types'
import moment from 'moment'

export const useDateFormatter = () => {
  const formatDateData = (date: Date): DateData => {
    const data = {
      year: String(moment(date).year()),
      month: formatNumberWithZero(moment(date).month() + 1),
      day: formatNumberWithZero(moment(date).date())
    }

    return data
  }

  const formatNumberWithZero = (number: number) => {
    let strNumber = String(number)

    if (strNumber.length < 2) {
      strNumber = '0' + strNumber
    }

    return strNumber
  }

  const formatFullDate = (date: Date) => moment(date).format('LL')

  return { formatDateData, formatFullDate }
}
