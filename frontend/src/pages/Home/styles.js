import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const LimitPageMobile = styled.div`
  min-height: 74.2vh;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const CategorySection = styled.div`
  max-width: 1122px;
  margin: 0 auto;

  width: 100%;
  margin-top: 47px;
`;

export const CategoryTitle = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  font-size: 32px;
  font-weight: 500;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ButtonRedirectCart = styled.button`
  display: none;
  @media (max-width: 768px) {
    position: fixed;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;

    bottom: ${({ cart }) => (cart > 0 ? "0px" : "-60px")};
    background-color: #750310;
    border: none;
    color: white;
    transition: all 0.3s ease 0s;

    &:hover {
      filter: brightness(0.98) !important;
    }
  }
`;
