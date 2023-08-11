import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const LimitPageMobile = styled.div`
  max-width: 1122px;
  margin: 0 auto;
  height: 100%;
  min-height: 74vh;

  @media (max-width: 768px) {
    padding: 0 48px;
    min-height: 76.4vh;
  }
`;

export const Back = styled.div`
  display: flex;

  margin: 24px 0;
`;

export const AmountContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 24px;

  > button {
    margin: 0 !important;
    width: 162px !important;
    font-size: 14px;
    font-weight: 500;
    padding: 12px;
  }

  @media (max-width: 768px) {
    height: auto;
    justify-content: center;

    > button {
      max-width: ${({ admin }) => (admin ? "100%" : "188px")};
      width: ${({ admin }) => admin && "100%"};
      height: ${({ admin }) => (admin ? "48px" : "38px")};
      font-size: 14px !important;
      font-size: 9.464px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  > input {
    display: flex;
    justify-content: center;
    text-align: center;
    border: none;
    background: none;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 24px;
  }

  > svg {
    cursor: pointer;

    &:hover,
    &:active {
      filter: brightness(0.9);
    }
  }
`;

export const ProductContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 47px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ProductImage = styled.div`
  > img {
    width: 390px;
    height: 390px;

    object-fit: cover;

    border-radius: 5px;
  }

  @media (max-width: 768px) {
    > img {
      width: 264px;
      height: 264px;

      object-fit: cover;

      border-radius: 5px;
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const ProductTitle = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  line-height: 140%;

  @media (max-width: 768px) {
    font-size: 27.041px;
    font-weight: 500;
  }
`;

export const ProductDescription = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (max-width: 768px) {
    font-size: 16.225px;
    font-weight: 400;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 24px;
    justify-content: center;
  }
`;

export const IngredientsText = styled.div`
  display: flex;
  align-items: center;

  height: 32px;
  font-size: 14px;
  font-weight: 500;

  border-radius: 5px;
  background: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 4px 8px;
`;
