import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  .buttonAdvance {
    @media (min-width: 830px) {
      display: none;
    }
  }

  .buttonBack {
    background: ${({ theme }) => theme.COLORS.DARK_800};
    @media (min-width: 830px) {
      display: none;
    }
  }
`;

export const LimitPageMobile = styled.div`
  max-width: 1122px;
  margin: 34px auto;
  min-height: 72.8vh;
  height: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 0;
  grid-template-areas:
    "order"
    "payment";

  @media (max-width: 1090px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "order";
    padding: 0 24px;
    height: 100%;
    min-height: 75.3vh;
  }
`;

export const MyOrder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 830px) {
    display: ${({ pageNumber }) => (pageNumber === 1 ? "" : "none")};
  }
`;

export const OrderTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  margin-bottom: 32px;
`;

export const OrderList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const OrderItem = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0px;
`;

export const ProductImage = styled.div`
  > img {
    width: 72px;

    height: 72px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const ProductTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 160%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const ProductPrice = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;

export const ButtonProductDelete = styled.button`
  font-size: 12px;
  font-weight: 400;
  line-height: 160%;
  text-align: left;
  width: 40px;

  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.RED_400};
  &:hover {
    filter: brightness(0.98) !important;
  }
`;

export const OrderTotal = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 160%; /* 32px */

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 830px) {
    display: ${({ pageNumber }) => (pageNumber === 2 ? "" : "none")};
  }
`;

export const PaymentTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  margin-bottom: 32px;
`;

export const PaymentCard = styled.form`
  height: 445px;
  padding: 48px 91px;
  border-radius: 0px 0px 8px 8px;

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-top: none;

  display: flex;
  gap: 37px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 830px) {
    padding: 38px;
  }

  > div {
    > input {
      padding: 14px !important;
    }
  }

  > button {
    width: 100%;
    height: 56px;

    background: ${({ theme }) => theme.COLORS.RED_100};
  }

  .error {
    margin: -30px;
    width: 100%;
    color: red;
    font-size: 14px;
  }
  .error2 {
    margin: 0px;
    width: 100%;
    color: red;
    font-size: 14px;
    margin-bottom: -26px;
  }
`;

export const PaymentButton = styled.div`
  display: flex;

  button {
    gap: 10px;
    height: 81px;
    width: 100%;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;

    background: ${({ theme }) => theme.COLORS.DARK_800};

    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

    &:first-child {
      border-radius: 8px 0px 0px 0px;
    }

    &:last-child {
      border-radius: 0px 8px 0px 0px;
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 17px;

  > div {
    > input {
      padding: 14px !important;
    }
  }
`;
