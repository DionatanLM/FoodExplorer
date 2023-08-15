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

  @media (max-width: 1150px) {
    padding: 0 24px;
    min-height: 76.4vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 30px auto 0;

  input,
  select,
  textarea {
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  textarea {
    max-width: 100%;
    min-width: 100%;
  }

  > option {
    height: 36px !important;
    display: flex;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: 8px;
    border: none !important;
  }

  select {
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right 15px top 50%;
    background-size: 40px;
  }

  .button {
    @media (min-width: 768px) {
      width: 173px;
    }
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    background: #ab4d55;
  }

  .buttonDelete {
    @media (min-width: 768px) {
      width: 173px;
    }
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 32px;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 140%;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const Back = styled.div`
  display: flex;

  margin: 24px 0;
  button {
    padding-left: 0;
  }
`;

export const InputImage = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 230px;

  @media (max-width: 768px) {
    width: 100%;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }
  .titleImg {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  .imgDish {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;

    width: 230px;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    cursor: pointer;
    transition: filter 0.3s;

    /* text-overflow: clip;
    overflow: hidden;
    padding: 0 5px;
    white-space: nowrap;

    .iconImg{
      padding: 0px 50px;
    } */

    input {
      display: none;
    }

    &:hover {
      filter: brightness(0.9);
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: #c4c4cc;
    margin-bottom: 8px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding: 12px;
  gap: 10px;
  background: #0d161b;
  min-height: 56px;
  border-radius: 8px;
`;
