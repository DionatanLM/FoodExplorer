import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const LimitPageMobile = styled.div`
  max-width: 1122px;
  margin: 34px auto;
  min-height: 72.8vh;
  height: auto;

  display: flex;

  @media (max-width: 1090px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
  }
`;

export const MyFavorites = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  margin-bottom: 32px;
`;

export const FavoriteList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;

  .orderNone {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
    @media (max-width: 768px) {
      margin-top: -20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const FavoriteItem = styled.div`
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

export const ProductTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 160%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const ButtonRemoveFavorite = styled.button`
  font-size: 12px;
  font-weight: 400;
  line-height: 160%;
  text-align: left;
  width: 138px;

  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.RED_400};
  &:hover {
    filter: brightness(0.98) !important;
  }
`;
