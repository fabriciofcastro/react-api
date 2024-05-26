import { HeaderContainer, HeaderContent, Logo, NewTransactionButton } from "./styles"
import logoImg from '../../assets/logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={logoImg} alt="logo" />
        <NewTransactionButton >Nova transação</NewTransactionButton>
      </HeaderContent>
      
    </HeaderContainer>
  )
}
