import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  /* display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: "brand header" "menu search" "menu content" "newnote content"; */

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;
