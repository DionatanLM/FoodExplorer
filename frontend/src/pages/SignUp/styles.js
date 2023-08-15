import styled from "styled-components";
import logoImg from "../../assets/logo.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;

  max-width: 1368px;

  .formContainer {
    display: flex;
    justify-content: center;

    width: 50%;
    @media (max-width: 950px) {
      width: 100%;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;

    margin: 0px;

    padding: 0px 45px;
    gap: 32px;
    margin-top: -80px;
  }
`;

export const Form = styled.form`
  padding: 64px;
  gap: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 16px;

  min-width: 476px;

  @media (max-width: 950px) {
    background: none;
    padding: 0px;
    min-width: auto;
    width: 100%;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    @media (max-width: 950px) {
      display: none;
    }
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Logo = styled.div`
  width: 50%;
  height: 100%;
  background: url(${logoImg}) no-repeat center;

  @media (max-width: 950px) {
    height: 100px;
    width: 100%;
  }
`;
