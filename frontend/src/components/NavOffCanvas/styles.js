import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: absolute;
    top: 70px;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    left: ${(props) => (props.showMenu ? "0" : "-100%")};
    animation: showSidebar 0.1s;
    transition: all 0.3s ease 0s;

    z-index: 1;

    @keyframes showSidebar {
      from {
        opacity: 0;
        width: 0;
      }
      to {
        opacity: 1;
        width: 300px;
      }
    }
  }
`;

export const HeaderMobile = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0px 24px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  transition: 0.5s;

  > svg {
    transform: rotate(90deg);
    transition: 0.7s;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 21px;
  font-weight: 400;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  input {
    margin-bottom: 36px;
  }
`;

export const ItemMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: none;
  font-family: "Poppins";
  font-size: 24px;
  padding: 10px;

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
