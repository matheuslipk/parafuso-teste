import React from 'react'
import { TabContainer } from './Tab.style'

interface TabProps {
  label?: string
  onClick?: any
  isActive?: boolean
}
export const Tab = ({ label, onClick, isActive }: TabProps) => {
  return (
    <TabContainer onClick={onClick} data-active={isActive}>
      <p>{label}</p>
    </TabContainer>
  )
}
