import { useContext } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/Search"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles"
import { TransactionContext } from "../../context/transactionsContext"
import { dateFormatter, priceFormatter } from "../../../src/utils/formatter"


export const Transactions = () => {

  const { transactions } = useContext(TransactionContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer >
        <SearchForm />
        <TransactionTable>
          <tbody>
            { transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%" >{ transaction.description }</td>
                  <td>
                    <PriceHighlight variant={ transaction.type}>
                      { transaction.type === 'outcome' && '- ' }
                      { priceFormatter.format(transaction.price) }
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{ transaction.createAt}</td> 
                </tr>

              )
            }) }


          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
