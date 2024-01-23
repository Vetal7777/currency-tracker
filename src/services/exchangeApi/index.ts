import { axiosInstance } from '@/services/config'
import { GetCurreniesFromApi } from './types'

export const getCurreniesFromApi: GetCurreniesFromApi = async ({
  year,
  month,
  day
}) => {
  return await axiosInstance.get(
    `/NBUStatService/v1/statdirectory/exchange?date=${year}${month}${day}&json`
  )
}
