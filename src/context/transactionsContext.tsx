import { createContext, useEffect, useState } from "react";

interface TransactionProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createAt: string
}

interface TransactionContextType {
  transactions: TransactionProps[]
  fetchTransactions: (query?: string) => Promise<void>
}
interface TransactionContextProps {
  children: React.ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionContextProps) {

  const [transactions, setTransactions] = useState<TransactionProps[]>(() => [])

  async function fetchTransactions(query?: string) {

    const url = new URL("http://localhost:3000/transation")

    if(query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)

  }

  useEffect(() => {
    fetchTransactions()

  }, [])


  return (
    <TransactionContext.Provider value={ {
      transactions,
      fetchTransactions,
    } }>
      { children }
    </TransactionContext.Provider>
  )
}