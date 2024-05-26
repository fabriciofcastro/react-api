import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${({theme}) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 4rem;
`

export const NewTransactionButton = styled.button`
  border: 0;
  background-color: ${({theme}) => theme['green-500']};
  color: ${({theme}) =>theme['white']};
  font-weight: bold;
  padding: 1rem 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${({theme}) => theme['green-700']};
  }
`