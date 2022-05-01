import React from 'react'
import { Header } from '../components/Header/Header'
import { Tabs } from '../components/Tabs/Tabs'
import { Tab } from '../components/Tab/Tab'
import { TabPanel } from '../components/TabPanel/TabPanel'
import { PlateInput } from '../components/PlateInput/PlateInput'
import { Button } from '../components/Button/Button'

export const Entrance = () => {
  const [tab, setTab] = React.useState(0)
  const [plate, setPlate] = React.useState('ABC-1234')

  const handleChangeTab = (tab:number) => {
    setTab(tab)
  }

  const handleChangePlate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const plateFormatted = e.target.value.trim().toUpperCase()
    setPlate(plateFormatted)
  }

  const isValidPlate = plate.length === 8

  return (
    <div>
      <Header />
      <Tabs>
        <Tab isActive={tab === 0} onClick={() => handleChangeTab(0)} label='Entrada' />
        <Tab isActive={tab === 1} onClick={() => handleChangeTab(1)} label='Saída' />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <label>Número da placa:</label>
        <PlateInput value={plate} onChange={handleChangePlate} placeholder="AAA-0000" />
        <Button disabled={!isValidPlate} label='CONFIRMAR ENTRADA' color='success' />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <label>Número da placa:</label>
        <PlateInput value={plate} onChange={handleChangePlate} placeholder="AAA-0000" />
        <Button disabled={!isValidPlate} label='PAGAMENTO' color='purple' />
        <Button disabled={!isValidPlate} label='SAÍDA' color='purple' outline />
      </TabPanel>
    </div>
  )
}
