import styled from 'styled-components'
import { COLORS, HEIGHTS } from '../../utils/constants'

export const ButtonContainer = styled.button`
  height: ${HEIGHTS.button}px;
  border: 2px solid ${COLORS.gray500};
  background-color: ${COLORS.white};
  font-size: 1rem;
  border-radius: 5px;

  ${(props:any) => props['data-color'] === 'success' && `
    background-color: ${COLORS.success};
    color: ${COLORS.white};
    border: none;
  `}

  ${(props:any) => {
    if (props['data-color'] === 'purple' && props['data-outline']) {
      return `
        background-color: ${COLORS.white};
        color: ${COLORS.purple};
        border-color: ${COLORS.purple};
      `
    }

    if (props['data-color'] === 'purple') {
      return `
      background-color: ${COLORS.purple};
      color: ${COLORS.white};
      border: none;
      `
    }
  }}

  ${props => props.disabled && `
    background-color: ${COLORS.disabled};
    color: ${COLORS.grayText};
    border: none;
  `}

`
