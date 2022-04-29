import axios from 'axios'

const apiService = axios.create({
  baseURL: 'https://parking-lot-to-pfz.herokuapp.com'
})

export const getHistoryByPlate = (plate:string) => {
  return apiService.get(`parking/${plate}`)
}
