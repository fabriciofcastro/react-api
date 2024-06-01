import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styled'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'



const newTransactionFormSchema = z.object({
  Description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])

})

type NewTransactionFormInput = z.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<NewTransactionFormInput>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInput) {
    console.log(data);
    
  }

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
        <form onSubmit={ handleSubmit(handleCreateNewTransaction) }>
          <input type="text"
            placeholder='Descrição'
            required
            { ...register('Description') } 
          />
          <input type="number"
            placeholder='Preço'
            required
            { ...register('price', { valueAsNumber: true }) }
          />
          <input type="text"
            placeholder='Categoria'
            required
            { ...register('category') }
          />

          <Controller
            control={ control }
            name='type'
            render={ ({ field }) => {
              return (
                <TransactionType onValueChange={ field.onChange } value={ field.value }>
                  <TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp size={ 20 } />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant='outcome' value="outcome">
                    <ArrowCircleDown size={ 20 } />
                    Saída
                  </TransactionTypeButton>

                </TransactionType>
              )
            } }
          />

          <button type='submit' disabled={ isSubmitting }>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
