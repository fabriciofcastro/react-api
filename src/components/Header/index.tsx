import { HeaderContainer, HeaderContent, Logo, NewTransactionButton } from "./styles"
import logoImg from '../../assets/logo.png'
import * as Dialog from '@radix-ui/react-dialog';
import { NweTransactionModal } from "../NewTRansactionModal";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={logoImg} alt="logo" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton >
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>
          <NweTransactionModal />
        </Dialog.Root>

      </HeaderContent>
      
    </HeaderContainer>
  )
}
