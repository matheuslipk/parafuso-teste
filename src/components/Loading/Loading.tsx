import React from 'react'
import loading from '../../assets/loading.svg'
import { LoadingContainer } from './Loading.styles'

interface LoadingProps {
  text?: string
}
export const Loading = ({ text }:LoadingProps) => {
  return (
    <LoadingContainer>
      <img src={loading} width={60} />
      {text}
    </LoadingContainer>
  )
}
