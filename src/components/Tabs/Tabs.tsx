import React from 'react'
import { TabsContainer } from './Tabs.style'

interface TabsProps {
  children: React.ReactNode
}

export const Tabs = ({ children }: TabsProps) => {
  // const [currentTab, setCurrentTab] = React.useState(0)

  return (
    <TabsContainer>
      {children}
    </TabsContainer>
  )
}
