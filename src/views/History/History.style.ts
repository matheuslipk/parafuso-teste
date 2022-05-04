import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

export const List = styled.ul`
  display: flex;
  background-color: ${COLORS.white};
  flex-direction: column;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 4px;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  border: 1px solid;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;


    label {
      font-size: 0.75rem;
    }

    p {
      font-size: 1.5rem;
      color: ${COLORS.black};
    }
  }
`

export const PlateText = styled.h3`
  font-size: 1.5rem;
  color: ${COLORS.primary};

  img {
    margin-right: 10px;
    cursor: pointer;
  }
`
