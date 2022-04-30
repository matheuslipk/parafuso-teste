import React from 'react'
import { Header } from '../components/Header/Header'
import { Tabs } from '../components/Tabs/Tabs'
import { Tab } from '../components/Tab/Tab'
import { TabPanel } from '../components/TabPanel/TabPanel'

export const Entrance = () => {
  const [value, setValue] = React.useState(0)
  const handleChange = (value:number) => {
    setValue(value)
  }

  return (
    <div>
      <Header />
      <Tabs>
        <Tab isActive={value === 0} onClick={() => handleChange(0)} label='Entrada' />
        <Tab isActive={value === 1} onClick={() => handleChange(1)} label='Saída' />
      </Tabs>
      <TabPanel value={value} index={0}>
        TabPanel1
      </TabPanel>
      <TabPanel value={value} index={1}>
        TabPanel2
      </TabPanel>
    </div>
  )
}
