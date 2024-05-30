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
}
interface TransactionContextProps {
  children: React.ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionContextProps) {

  const [transactions, setTransactions] = useState<TransactionProps[]>(() => [])

  async function getTransactions() {
    const response = await fetch("http://localhost:3000/transation")
    const data = await response.json()

    setTransactions(data)

  }

  useEffect(() => {
    getTransactions()

  }, [])


  return (
    <TransactionContext.Provider value={ { transactions } }>
      { children }
    </TransactionContext.Provider>
  )
}