import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay } from './styled';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { TransactionType, TransactionTypeButton } from './styled'
export const NweTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>
          Nova transação
        </Dialog.Title>
        <CloseButton>
          <X size={ 18 } />
        </CloseButton>
        <form action="">
          <input type="text" placeholder='Descrição' required/>
          <input type="number" placeholder='Preço' required/>
          <input type="text" placeholder='Categoria' required/>

          <TransactionType>
            <TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={ 20 } />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant='outcome' value="outcome">
              <ArrowCircleDown size={ 20 } />
              Saída
            </TransactionTypeButton>

          </TransactionType>

          <button type='submit'>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
