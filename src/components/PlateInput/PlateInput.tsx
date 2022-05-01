import React from 'react'
import { PlateInputContainer } from './PlateInput.style'

interface PlateInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const PlateInput = ({ value, onChange, placeholder }:PlateInputProps) => {
  return (
    <PlateInputContainer maxLength={8} value={value} onChange={onChange} placeholder={placeholder} />
  )
}
