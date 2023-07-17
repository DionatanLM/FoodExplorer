import styled from 'styled-components'

export const Container = styled.button`
  min-width: 205px;
  height: 100%;
  padding: 12px 32px;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  text-align: center;
  font-size: 14px;

  border: 0;
  border-radius: 5px;
  font-weight: 500;

  

  &:disabled {
    opacity: 0.5;
  }
`
