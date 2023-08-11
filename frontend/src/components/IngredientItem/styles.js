import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;

  border-radius: 8px;
  height: 32px;
  min-width: 116px;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  stroke-width: 22;
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}}` : "none"};

  > button {
    border-radius: 8px !important;
    border: none;
    background: none;
  }

  .button-delete {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE};

    padding: 12px;
    border-radius: 0px 8px 8px 0px !important;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  .button-add {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    padding: 12px;
    border-radius: 0px 8px 8px 0px !important;
    border: none;
    background-color: #0d161b;
  }

  input {
    height: 100%;
    width: 105px;
    border-radius: 8px 0px 0px 8px !important;
    font-size: 16px;

    padding: 12px;

    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.WHITE} !important;
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
