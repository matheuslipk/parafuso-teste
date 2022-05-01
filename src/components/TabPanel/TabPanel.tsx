import React from 'react'
import { TabPanelContainer } from './TabPanel.style'

interface TabProps {
  children?: any
  index: number
  value: number
}
export const TabPanel = (props: TabProps) => {
  const { children, value, index } = props
  return (

    <TabPanelContainer hidden={value !== index}>
      {children}
    </TabPanelContainer>
  )
}
