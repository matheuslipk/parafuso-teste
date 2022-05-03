import React from 'react'
import done from '../../assets/done.svg'
import { ConfirmContainer } from './Confirm.styles'

interface ConfirmProps {
  text?: string
}
export const Confirm = ({ text }:ConfirmProps) => {
  return (
    <ConfirmContainer>
      <img src={done} width={60} />
      {text}
    </ConfirmContainer>
  )
}
