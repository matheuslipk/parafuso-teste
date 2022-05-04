import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${COLORS.primary};
  min-height: 80px;
  display: flex;
  padding: 0 20px;

  img {
    cursor: pointer;
  }
`
