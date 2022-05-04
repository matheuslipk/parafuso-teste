import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import * as apiService from '../../services/apiService'
import { ReserveInterface } from '../../types/app'
import { List, ListItem } from './History.style'

export const Histoty = () => {
  const { plate } = useParams<{plate:string}>()
  const [itens, setItens] = React.useState<ReserveInterface[]>([])
  const [, setError] = React.useState<string| null>(null)

  const handleGetHistoryByPlate = () => {
    apiService.getHistoryByPlate(plate as string)
      .then((response) => {
        setItens(response)
      })
      .catch(() => {
        setError('Erro')
        setItens([])
      })
  }

  React.useEffect(() => {
    handleGetHistoryByPlate()
  }, [])

  return (
    <div>
      <Header />
      <List>

      <div>{plate}</div>
      {
        itens.map((i, index) => (
          <ListItem key={`${index}`}>
            <div>
              <label>TEMPO ATUAL</label>
              <p>{i.time}</p>
            </div>
            <div>
              <label>PAGAMENTO</label>
              <p>{i.paid ? 'Pago' : '--'}</p>
            </div>
          </ListItem>
        ))
      }

      </List>
    </div>
  )
}
