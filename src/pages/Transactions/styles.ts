import styled from 'styled-components'

export const TransactionContainer = styled.main`
  max-width: 1120px;
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${({theme}) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`