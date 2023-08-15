import styled from "styled-components";

export const Duration = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  text-align: center;

  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
`;
