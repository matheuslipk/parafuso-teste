import axios from 'axios'

const apiService = axios.create({
  baseURL: 'https://parking-lot-to-pfz.herokuapp.com'
})

export const getHistoryByPlate = (plate:string) => {
  return apiService.get(`parking/${plate}`)
}

export const setParkingOut = (plate:string) => {
  return apiService.post(`parking/${plate}/out`)
}

export const setParkingEntrance = (plate:string) => {
  return apiService.post('parking', { plate })
}

export const setParkingPayment = (plate:string) => {
  return apiService.post(`parking/${plate}/pay`)
}
