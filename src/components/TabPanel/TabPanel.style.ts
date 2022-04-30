import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

export const TabPanelContainer = styled.div`
  display: flex;
  background-color: ${COLORS.white};
  min-height: 100px;

  ${props => props.hidden && 'display: none'};
`
