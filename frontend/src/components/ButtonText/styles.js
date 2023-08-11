import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 12px;

  font-size: 24px;
  font-weight: 700;
  filter: ${({ isActive }) => isActive && 'brightness(0.8)'};
  border: 0;

  &:disabled {
    opacity: 0.5;
  }
`;
