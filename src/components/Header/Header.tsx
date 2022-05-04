import { HeaderContainer } from './Header.style'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <img onClick={() => navigate('/')} src={logo} alt="Logo" />
      <img src={menu} alt="Menu" />
    </HeaderContainer>
  )
}
