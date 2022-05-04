import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

export const ModalContentPayment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HeaderModalText = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 180px;
  align-self: center;
  font-weight: 300;
  color: ${COLORS.black};
`

export const PlatePaymentText = styled.p`
  color: ${COLORS.primary};
  font-size: 2.375rem;
  text-align: center;
  margin-bottom: 15px;
`
