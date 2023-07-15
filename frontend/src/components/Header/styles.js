import logoImg from "../../assets/logo.png";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 104px;

  background: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const HeaderLimit = styled.div`
  max-width: 1060px;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 32px;
  align-items: center;

  padding: 24px 123px;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  background: url(${logoImg}) no-repeat center;
  background-size: 226px;
`;

export const Search = styled.div`
  width: 100%;
  height: 100%;
`;

export const Logout = styled.button`
  background: none;
  border: 0;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
  }
`;
