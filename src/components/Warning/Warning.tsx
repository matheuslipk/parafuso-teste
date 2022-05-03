import React from 'react'
import warning from '../../assets/warning.svg'
import { WarningContainer } from './Warning.styles'

interface WarningProps {
  text?: string
}
export const Warning = ({ text }:WarningProps) => {
  return (
    <WarningContainer>
      <img src={warning} width={60} />
      {text}
    </WarningContainer>
  )
}
