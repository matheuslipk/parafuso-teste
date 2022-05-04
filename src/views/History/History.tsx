import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { WrapBodyContainer } from '../../components/WrapBody/WrapBody.styles'
import * as apiService from '../../services/apiService'
import { ReserveInterface } from '../../types/app'
import { List, ListItem, PlateText } from './History.style'
import left from '../../assets/left.svg'
import { Modal } from '../../components/Modal/Modal'
import { Loading } from '../../components/Loading/Loading'
import { COLORS } from '../../utils/constants'

export const Histoty = () => {
  const { plate } = useParams<{plate:string}>()
  const navigate = useNavigate()
  const [itens, setItens] = React.useState<ReserveInterface[]>([])
  const [error, setError] = React.useState<string| null>(null)
  const [isLoading, setIsloading] = React.useState(true)

  const handleGetHistoryByPlate = () => {
    setIsloading(true)
    apiService.getHistoryByPlate(plate as string)
      .then((response) => {
        setItens(response.reverse())
      })
      .catch(() => {
        setError('Erro, placa inválida')
        setItens([])
      })
      .finally(() => setIsloading(false))
  }

  React.useEffect(() => {
    handleGetHistoryByPlate()
  }, [])

  return (
    <div>
      <Header />
      <WrapBodyContainer>
        <List>
          <PlateText>
            <img onClick={() => navigate('/')} src={left} alt="Voltar" />
            Placa {plate}
          </PlateText>
          {
            itens.map((i, index) => (
              <ListItem key={`${index}`}>
                <div>
                  <label>{i.left ? 'TEMPO TOTAL' : 'TEMPO ATUAL'}</label>
                  <p>{i.time}</p>
                </div>
                <div>
                  <label>PAGAMENTO</label>
                  <p>{i.paid ? 'Pago' : '--'}</p>
                </div>
              </ListItem>
            ))
          }

          {
            error && <p style={{ color: COLORS.redError }}>{error}</p>
          }
        </List>
      </WrapBodyContainer>
      {
        isLoading && (
          <Modal>
            <Loading />
          </Modal>
        )
      }
    </div>
  )
}
