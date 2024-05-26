import React from 'react'
import { SearchContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export const Search = () => {
  return (
    <SearchContainer>
      <input type="search" placeholder='Busque por transações' />

      <button>
        <MagnifyingGlass size={15}/>
        Buscar
      </button>
    </SearchContainer>
  )
}
