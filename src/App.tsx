import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/glovals"
import { Transactions } from "./pages/Transactions"
import { TransactionsProvider } from "./context/transactionsContex"


export const App = () => {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>

    </ThemeProvider>
  )
}

