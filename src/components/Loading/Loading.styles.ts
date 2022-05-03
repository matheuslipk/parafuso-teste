import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.black};
  
  img {
    animation: rotating 1.5s linear infinite;
    margin-bottom: 10px;
  }
  
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
}
`
