import styled from 'styled-components'
import { COLORS, HEIGHTS } from '../../utils/constants'

export const PlateInputContainer = styled.input`
  font-size: 1.5rem;
  text-align: center;
  background: ${COLORS.yellow100};
  border: 2px solid ${COLORS.gray500};
  border-radius: 5px;
  min-height: ${HEIGHTS.input}px;
  color: ${COLORS.black};
  margin: 8px 0;
`
