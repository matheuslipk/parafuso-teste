import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #00000055;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${COLORS.white};
  min-height: 300px;
  min-width: 300px;
  padding: 10px;
`
