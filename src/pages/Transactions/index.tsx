import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { Search } from "./components/Search"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles"


export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer >
        <Search />
      <TransactionTable>
        <tbody>
          <tr>
            <td width="50%" >Desenvolvimento de site </td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
            <td>Vendas</td>
            <td>13/04/2024</td>
          </tr>
          <tr>
            <td width="50%" >Almoço de site </td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 59,00
                </PriceHighlight>
              </td>
            <td>Alimentação</td>
            <td>13/04/2024</td>
          </tr>
       
        </tbody>
      </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
