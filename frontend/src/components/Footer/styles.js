import logoImg from "../../assets/logo.svg";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_600};
  margin-top: 47px;

  @media (max-width: 768px) {
    height: 70px;
  }

  @media (min-width: 768px) and (max-width: 1090px) {
    padding: 24px 15px;
  }
`;

export const FooterLimit = styled.div`
  max-width: 1122px;

  width: 100%;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  > svg {
    width: 170px;
    > path {
      fill: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 24px;

    height: 70px;

    > svg {
      width: 120px;
    }
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  text-align: right;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
