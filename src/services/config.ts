import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://bank.gov.ua'
})
