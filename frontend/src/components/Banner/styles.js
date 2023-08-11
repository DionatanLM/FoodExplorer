import bannerImg from "../../assets/bannerMaccarons.png";
import bannerImgAlt from "../../assets/banner.png";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  max-width: 1122px;
  width: 100%;
  height: 260px;
  margin: 0 auto;
  padding: 0 95px;

  background: ${({ theme }) => theme.COLORS.DARK_GRADIENT};
  border-radius: 8px;

  margin-top: 172px;

  @media (min-width: 768px) and (max-width: 1090px) {
    padding: 0 55px;
    width: 94%;
  }

  @media (max-width: 768px) {
    height: 120px;
    padding: 0 24px;

    margin-top: 44px;
  }
`;

export const Image = styled.div`
  background: url(${bannerImg}) no-repeat center;
  background-size: 620px;

  position: absolute;
  width: 593px;
  height: 411px;

  bottom: -5px;
  left: -41px;

  @media (min-width: 768px) and (max-width: 1090px) {
    background-size: 420px;
    bottom: -70px;
    left: -102px;
  }
  @media (max-width: 768px) {
    background: url(${bannerImgAlt}) no-repeat center;

    background-size: 179px;
    width: 173px;
    height: 149px;
    bottom: -4px;
    left: -21px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: 130px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 3px;
  }
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
