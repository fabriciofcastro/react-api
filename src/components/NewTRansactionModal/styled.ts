import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: #00000075;
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({theme}) => theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      padding: 1.25rem;
      background-color: ${({theme}) => theme['gray-900']};
      color: ${({theme}) => theme['gray-500']};

      &::placeholder {
        color: ${({theme}) => theme['gray-500']};
      }
    }

    button[type="submit"] { 
      border: 0;
      background-color: ${({theme}) => theme['green-500']};
      color: ${({theme}) => theme.white};
      padding: 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed
      }

      &:not(:disabled):hover {
        background-color: ${({theme}) => theme['green-700']};
        transition: background-color 0.4s ease;
      }

    }
  }

`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 2rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${({theme}) => theme['gray-500']};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem ;
`

interface transactionButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<transactionButtonProps>`
  background-color: ${({theme}) => theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  color: ${({theme}) => theme['gray-300']} ;

  &[data-state="unchecked"]:hover {
    background-color: ${({theme}) => theme['gray-600']};
    transition: background-color 0.4s ease ;
  }

  svg {
    color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']}
  }

  &[data-state="checked"] {
    color: ${props => props.theme.white};
    background-color: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};

    svg {
      color: ${({theme}) => theme.white};
    }
  }
`