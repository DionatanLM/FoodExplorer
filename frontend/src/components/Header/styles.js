import logoImg from "../../assets/logo.png";
import logoImgAdmin from "../../assets/logoAdmin.svg";
import logoImgAdminMobile from "../../assets/logoAdminMobile.svg";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 104px;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  @media (max-width: 768px) {
    height: 70px;
  }
`;

export const ButtonFavorite = styled.div`
  button {
    font-size: 16px;
    font-weight: 400;
    width: 141px;
  }
`;

export const HeaderLimit = styled.div`
  max-width: 1130px;
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
`;

export const Logo = styled.div`
  min-width: 203px;
  height: 100%;
  background: url(${({ admin }) => (admin ? logoImgAdmin : logoImg)}) no-repeat
    center;
  background-size: 200px;
  cursor: pointer;

  @media (max-width: 768px) {
    min-width: 150px;
    height: 100%;
    background: url(${({ admin }) => (admin ? logoImgAdminMobile : logoImg)})
      no-repeat center;
    background-size: ${({ admin }) => (admin ? "180px" : "150px")};
  }
`;

export const Search = styled.div`
  width: 100%;
  height: 100%;
`;

export const Logout = styled.button`
  background: none;
  border: 0;
  height: 30px;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
  }
`;

export const HeaderMobile = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 24px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 0 0;
  grid-template-areas:
    "menu"
    "logo"
    "order";

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Circle = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  font-size: 14px;

  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  top: 15px;
  margin-right: -5px;
`;

export const ContainerAlt = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 1s ease-in-out;
`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: relative;
`;
