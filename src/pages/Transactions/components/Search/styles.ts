import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${({theme}) => theme['gray-900']};
    color: ${({theme}) => theme['grey-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({theme}) => theme['gray-500']};
    }
  }

button {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: 0;
  padding: 1rem;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme['green-300']};
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${({theme}) => theme["green-500"]};
    color: ${({theme}) => theme.white};
    border-color: ${({theme}) => theme['green-500']};
    transition: background-color 0.2s ease(), color 0.2s ease, border-color 0.2s ease;
    cursor: not-allowed;
  }

  &:disabled {
    opacity: 0.6;
  }
}

`