import axios from 'axios'
import { EntranceInterface, ReserveInterface } from '../types/app'

const axiosService = axios.create({
  baseURL: 'https://parking-lot-to-pfz.herokuapp.com'
})

function formatErrorResponse (error:any) {
  if (error.response) return error.response.data
  return { message: 'Falha ao conectar com o servidor' }
}

export const apiService = {
  get: async (path:string): Promise<any> => new Promise((resolve, reject) => {
    axiosService.get(path)
      .then((response) => resolve(response.data))
      .catch((error) => reject(formatErrorResponse(error)))
  }),
  post: async (path:string, body?:object):Promise<any> => new Promise((resolve, reject) => {
    axiosService.post(path, body)
      .then((response) => resolve(response.data))
      .catch((error) => reject(formatErrorResponse(error)))
  })
}

export const getHistoryByPlate = (plate:string): Promise<ReserveInterface[]> => {
  return apiService.get(`parking/${plate}`)
}

export const setParkingOut = (plate:string): Promise<any> => {
  return apiService.post(`parking/${plate}/out`)
}

export const setParkingEntrance = (plate:string):Promise<EntranceInterface> => {
  return apiService.post('parking', { plate })
}

export const setParkingPayment = (plate:string): Promise<any> => {
  return apiService.post(`parking/${plate}/pay`)
}
