import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Tabs } from '../../components/Tabs/Tabs'
import { Tab } from '../../components/Tab/Tab'
import { TabPanel } from '../../components/TabPanel/TabPanel'
import { PlateInput } from '../../components/PlateInput/PlateInput'
import { Button } from '../../components/Button/Button'
import { formatPlate } from '../../utils/helpers'
import * as apiService from '../../services/apiService'
import { Modal } from '../../components/Modal/Modal'
import { Loading } from '../../components/Loading/Loading'
import { Confirm } from '../../components/Confirm/Confirm'
import { Warning } from '../../components/Warning/Warning'
import { WrapBodyContainer } from '../../components/WrapBody/WrapBody.styles'
import { HeaderModalText, ModalContentPayment, PlatePaymentText } from './Entrance.styles'

type StatusLoadingInterface = 'loading' | 'error' | 'done' | 'confirmPayment' | 'confirmOut' | null

export const Entrance = () => {
  const [tab, setTab] = React.useState(0)
  const [plate, setPlate] = React.useState('')
  const [showModal, setShowModal] = React.useState(false)
  const [statusLoading, setStatusLoading] = React.useState<StatusLoadingInterface>(null)
  const [messageModal, setMessageModal] = React.useState('')
  const timerModal = 1500
  const navigate = useNavigate()

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
    setMessageModal('Registrando...')

    apiService.setParkingEntrance(plate)
      .then(() => {
        setStatusLoading('done')
        setMessageModal('REGISTRANDO!')
      })
      .catch((e:any) => {
        setStatusLoading('error')
        setMessageModal(e.errors?.plate?.[0] || 'Erro!')
      })
      .finally(() => setTimeout(() => {
        setShowModal(false)
        setStatusLoading(null)
      }, timerModal))
  }

  const handleSetParkingOut = (confirm = false) => {
    setShowModal(true)
    const setParkingOut = () => {
      setStatusLoading('loading')
      setMessageModal('Confirmando...')

      apiService.setParkingOut(plate)
        .then(() => {
          setStatusLoading('done')
          setMessageModal('SA??DA LIBERADA')
        })
        .catch((e:any) => {
          setStatusLoading('error')
          setMessageModal(e.errors?.plate?.[0] || 'Erro!')
        })
        .finally(() => setTimeout(() => {
          setShowModal(false)
          setStatusLoading(null)
        }, timerModal))
    }
    if (confirm) {
      setParkingOut()
      return
    }
    setStatusLoading('confirmOut')
  }

  const handleParkingPayment = (confirm = false) => {
    setShowModal(true)
    const setPayment = () => {
      setStatusLoading('loading')
      setMessageModal('Confirmando...')

      apiService.setParkingPayment(plate)
        .then(() => {
          setStatusLoading('done')
          setMessageModal('PAGO!')
        })
        .catch((e:any) => {
          setStatusLoading('error')
          setMessageModal(e.errors?.plate?.[0] || 'Erro!')
        })
        .finally(() => setTimeout(() => {
          setShowModal(false)
          setStatusLoading(null)
        }, 2000))
    }
    if (confirm) {
      setPayment()
      return
    }
    setStatusLoading('confirmPayment')
  }

  const handleGetHistoryByPlate = () => {
    navigate(`history/${plate}`)
  }

  return (
    <div>
      <Header />
      <WrapBodyContainer>

        <Tabs>
          <Tab isActive={tab === 0} onClick={() => handleChangeTab(0)} label='Entrada' />
          <Tab isActive={tab === 1} onClick={() => handleChangeTab(1)} label='Sa??da' />
        </Tabs>

        <TabPanel value={tab} index={0}>
          <label>N??mero da placa:</label>
          <PlateInput value={plate} onChange={handleChangePlate} placeholder="AAA-0000" />
          <Button
            onClick={handleSetEntrance}
            disabled={!isValidPlate}
            label='CONFIRMAR ENTRADA'
            color='success'
          />
        </TabPanel>

        <TabPanel value={tab} index={1}>
          <label>N??mero da placa:</label>
          <PlateInput value={plate} onChange={handleChangePlate} placeholder="AAA-0000" />
          <Button
            disabled={!isValidPlate}
            label='PAGAMENTO'
            color='purple'
            onClick={() => handleParkingPayment(false)}
          />
          <Button
            disabled={!isValidPlate}
            label='SA??DA'
            color='purple'
            outline
            onClick={() => handleSetParkingOut(false)}
            style={{ marginTop: 10 }}
          />
          <Button
            disabled={!isValidPlate}
            label='VER HIST??RICO'
            color='primary'
            outline
            onClick={handleGetHistoryByPlate}
            style={{ marginTop: 10, border: 'none' }}
          />
        </TabPanel>

      </WrapBodyContainer>
      {showModal && (
        <Modal>
          {statusLoading === 'loading' && <Loading text={messageModal} />}
          {statusLoading === 'done' && <Confirm text={messageModal} />}
          {statusLoading === 'error' && <Warning text={messageModal} />}
          {statusLoading === 'confirmPayment' && (
            <ModalContentPayment>
              <HeaderModalText>Confirma o pagamento do ve??culo da placa abaixo?</HeaderModalText>
              <PlatePaymentText>{plate}</PlatePaymentText>
              <Button onClick={() => handleParkingPayment(true)} label='CONFIRMAR' color='purple' />
              <Button
                disabled={!isValidPlate}
                label='VOLTAR'
                color='primary'
                outline
                onClick={() => setShowModal(false)}
                style={{ border: 'none' }}
              />
            </ModalContentPayment>
          )}
          {statusLoading === 'confirmOut' && (
            <ModalContentPayment>
              <HeaderModalText>Confirma a sa??da do ve??culo da placa abaixo?</HeaderModalText>
              <PlatePaymentText>{plate}</PlatePaymentText>
              <Button onClick={() => handleSetParkingOut(true)} label='CONFIRMAR' color='purple' />
              <Button
                disabled={!isValidPlate}
                label='VOLTAR'
                color='primary'
                outline
                onClick={() => setShowModal(false)}
                style={{ border: 'none' }}
              />
            </ModalContentPayment>
          )}
        </Modal>
      )}
    </div>
  )
}
