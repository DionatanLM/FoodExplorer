import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-bottom: 8px;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 14px 14px 14px 134px;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 8px;
    border: none;

    @media (max-width: 950px) {
      background: ${({ theme }) => theme.COLORS.DARK_900};
    }

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  > svg {
    position: absolute;
    margin-top: 18px;
    margin-left: 100px;
    > path {
      stroke: #ffffff;
    }
  }
`
