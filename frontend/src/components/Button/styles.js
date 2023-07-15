import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 12px 32px;

  border: 0;
  border-radius: 5px;
  font-weight: 500;
  margin-top: 16px;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin-left: 16px;
  }
`;
