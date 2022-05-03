import React from 'react'
import { ModalContainer, ModalContent } from './Modal.styles'

interface ModalProps {
  children?: React.ReactNode
}

export const Modal = ({ children }:ModalProps) => {
  return (
    <ModalContainer>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalContainer>
  )
}
