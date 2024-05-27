import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { Search } from "./components/Search"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles"

interface TransactionProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createAt: string

}

export const Transactions = () => {

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
    <div>
      <Header />
      <Summary />

      <TransactionContainer >
        <Search />
        <TransactionTable>
          <tbody>
            { transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%" >{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createAt}</td>
                </tr>
              )
            }) }


          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
