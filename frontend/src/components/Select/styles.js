import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-bottom: 8px;
  }

  > select {
    height: 56px;
    width: 100%;

    font-family: "Poppins";
    font-size: 14px;
    font-weight: 400;
    line-height: 160%; /* 22.4px */

    padding: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;
    border: none;

    appearance: none;
    -webkit-appearance: none;

    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right 15px top 50%;
    background-size: 40px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  select::after {
    top: 1px;
    right: 100px;
  }
  > svg {
    position: absolute;
    margin-top: 18px;
    margin-left: 100px;
    > path {
      stroke: #ffffff;
    }
  }
`;
