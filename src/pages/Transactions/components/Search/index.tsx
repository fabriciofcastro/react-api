import { SearchContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionContext } from '../../../../context/transactionsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const { fetchTransactions } = useContext(TransactionContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchContainer onSubmit={ handleSubmit(handleSearchTransaction) }>
      <input
        type="search"
        placeholder='Busque por transações'
        { ...register('query') }
      />

      <button type='submit' disabled={isSubmitting}>
        <MagnifyingGlass size={15} />
        Buscar
      </button>
    </SearchContainer>
  )
}
