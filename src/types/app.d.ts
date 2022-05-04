
export interface EntranceInterface {
  entered_at: string
  plate: string
  reservation: string
}

export interface ReserveInterface {
  time: string
  paid: boolean
  left: boolean
  plate: string
  reservation: string
}
