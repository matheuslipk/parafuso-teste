import { createGlobalStyle } from 'styled-components'
import { COLORS } from '../../utils/constants'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${COLORS.grayText};
    font-family: "Open Sans";
  }
  body {
    background-color: ${COLORS.background};
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }

    &:active {
      opacity: 0.5;
    }
  }
`

export default GlobalStyle
