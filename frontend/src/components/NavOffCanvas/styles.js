import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  transition: all 0.3s ease-in-out;

`

export const HeaderMobile = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 24px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  transform: translateY(0px);

  transition: 0.5s;

  > svg {
    transform: rotate(90deg);
    transition: 0.7s;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const Text = styled.span`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 21px;
  font-weight: 400;
`
