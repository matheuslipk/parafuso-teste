import { ButtonContainer } from './Button.styles'

interface ButtonProps {
  label?: string
  disabled?: boolean
  color?: 'success' | 'purple'
  outline?: boolean
}

export const Button = ({ label, disabled, color, outline }:ButtonProps) => {
  return (
    <ButtonContainer disabled={disabled} data-color={color} data-outline={outline}>
      {label}
    </ButtonContainer>
  )
}
