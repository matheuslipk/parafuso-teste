import React from 'react'
import { Header } from '../components/Header/Header'
import { Tabs } from '../components/Tabs/Tabs'
import { Tab } from '../components/Tab/Tab'
import { TabPanel } from '../components/TabPanel/TabPanel'
import { PlateInput } from '../components/PlateInput/PlateInput'
import { Button } from '../components/Button/Button'
import { formatPlate } from '../utils/helpers'
import * as apiService from '../services/apiService'
import { Modal } from '../components/Modal/Modal'
import { Loading } from '../components/Loading/Loading'
import { Confirm } from '../components/Confirm/Confirm'
import { Warning } from '../components/Warning/Warning'

type StatusLoadingInterface = 'loading' | 'error' | 'done' | null

export const Entrance = () => {
  const [tab, setTab] = React.useState(0)
  const [plate, setPlate] = React.useState('')
  const [showModal, setShowModal] = React.useState(false)
  const [statusLoading, setStatusLoading] = React.useState<StatusLoadingInterface>(null)

  const handleChangeTab = (tab:number) => {
    setTab(tab)
  }

  const handleChangePlate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const plateFormatted = formatPlate(e.target.value)
    setPlate(plateFormatted)
  }

  const isValidPlate = plate.length === 8

  const handleSetEntrance = () => {
    setShowModal(true)
    setStatusLoading('loading')

    apiService.setParkingEntrance(plate)
      .then(() => {
        setStatusLoading('done')
      })
      .catch(() => {
        setStatusLoading('error')
      })
      .finally(() => setTimeout(() => {
        setShowModal(false)
        setStatusLoading(null)
      }, 2000))
  }

  const handleSetParkingOut = () => {
    apiService.setParkingOut(plate)
  }

  const handleParkingPayment = () => {
    apiService.setParkingPayment(plate)
  }

  const handleGetHistoryByPlate = () => {
    apiService.getHistoryByPlate(plate)
  }

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
        <Button
          onClick={handleSetEntrance}
          disabled={!isValidPlate}
          label='CONFIRMAR ENTRADA'
          color='success'
        />
      </TabPanel>

      <TabPanel value={tab} index={1}>
        <label>Número da placa:</label>
        <PlateInput value={plate} onChange={handleChangePlate} placeholder="AAA-0000" />
        <Button
          disabled={!isValidPlate}
          label='PAGAMENTO'
          color='purple'
          onClick={handleParkingPayment}
        />
        <Button
          disabled={!isValidPlate}
          label='SAÍDA'
          color='purple'
          outline
          onClick={handleSetParkingOut}
          style={{ marginTop: 10 }}
        />
         <Button
          label='Ver Histórico'
          color='purple'
          outline
          onClick={handleGetHistoryByPlate}
          style={{ marginTop: 10 }}
        />
      </TabPanel>
      {showModal && (
        <Modal>
          {statusLoading === 'loading' && <Loading text='Registrando...' />}
          {statusLoading === 'done' && <Confirm text='REGISTRADO!' />}
          {statusLoading === 'error' && <Warning text='Erro!' />}
        </Modal>
      )}
    </div>
  )
}
