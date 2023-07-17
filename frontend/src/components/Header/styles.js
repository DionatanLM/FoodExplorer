import logoImg from '../../assets/logo.png'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 104px;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  @media (max-width: 768px) {
    height: 70px;
  }
`

export const HeaderLimit = styled.div`
  max-width: 1060px;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 32px;
  align-items: center;
  margin: 0 auto;

  padding: 24px 0px;

  @media (max-width: 1090px) {
    padding: 24px 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Logo = styled.div`
  min-width: 203px;
  height: 100%;
  background: url(${logoImg}) no-repeat center;
  background-size: 200px;
`

export const LogoMobile = styled.div`
  min-width: 150px;
  height: 100%;
  background: url(${logoImg}) no-repeat center;
  background-size: 150px;
`

export const Search = styled.div`
  width: 100%;
  height: 100%;
`

export const Logout = styled.button`
  background: none;
  border: 0;
  height: 30px;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
  }
`

export const HeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 24px;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  font-size: 14px;

  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  top: -3px;
  right: -3px;
`

export const ContainerAlt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`
