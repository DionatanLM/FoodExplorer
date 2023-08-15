import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;
  padding: 24px;
  justify-content: space-between;

  min-height: 462px;
  width: 306px;
  min-width: 306px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  background: ${({ theme }) => theme.COLORS.DARK_200};

  @media (max-width: 768px) {
    min-height: auto;

    min-width: 200px;

    gap: 12px;
  }
`;

export const Image = styled.a`
  > img {
    width: 100%;
    height: 176px;

    object-fit: cover;

    border-radius: 5px;
  }

  @media (max-width: 768px) {
    > img {
      width: 120px;
      height: 120px;

      object-fit: cover;

      border-radius: 5px;
    }
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: center;
  cursor: pointer;

  font-size: 24px;
  font-weight: 700;
  width: 100%;

  word-wrap: break-word;
  white-space: normal;

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  text-align: center;

  font-size: 14px;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
  text-align: center;

  font-size: 32px;
  font-weight: 400;
  line-height: 160%;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AmountContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  gap: 16px;

  > button {
    margin: 0 !important;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

    > button {
      width: 100%;
      height: 32px !important;
      font-size: 14px;

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

export const FavoriteIcon = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  cursor: pointer;
  > svg {
    transition: all 1s ease, transform 0.3s ease;
  }

  &:active {
    > svg {
      transform: scale(1.5);
    }
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
  }
`;
