import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

export const TabContainer = styled.div`
  display: flex;
  flex: 1;
  cursor: pointer;

  ${(props:any) => props['data-active'] && `
    border-bottom: 4px solid ${COLORS.primary};
    background-color: ${COLORS.white};
  `}

  p {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    ${(props:any) => props['data-active'] && `color: ${COLORS.primary}`};
  }
`
