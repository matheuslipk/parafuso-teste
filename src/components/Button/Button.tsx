import React from 'react'
import { ButtonContainer } from './Button.styles'

interface ButtonProps {
  label?: string
  disabled?: boolean
  color?: 'success' | 'purple' | 'primary'
  outline?: boolean
  onClick?: () => any
  style?: React.CSSProperties
}

export const Button = ({ label, color, outline, ...others }:ButtonProps) => {
  return (
    <ButtonContainer data-color={color} data-outline={outline} {...others}>
      {label}
    </ButtonContainer>
  )
}
