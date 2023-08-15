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
export const LimitPage = styled.div`
  max-width: 1122px;
  margin: 34px auto;
  min-height: 80vh;

  display: flex;
  flex-direction: column;

  .orderNone {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
    margin-top: 20px;
    @media (max-width: 768px) {
      margin-top: -32px;
    }
  }

  @media (max-width: 1090px) {
    gap: 17px;
    padding: 0 20px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  margin-bottom: 32px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 21px 24px;
  text-align: left;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 8px;
  overflow: hidden;
`;

export const Td = styled.td`
  padding: 21px 24px;

  text-align: left;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

  select {
    //width: 260px;
    padding-left: 20px;
  }
  option {
  }
`;

export const TableMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  padding: 16px 20px;

  .statusContainer {
    display: flex;
    gap: 10px;

    h2 {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .items {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Circle = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  //position: absolute;
`;

export const Status = styled.div`
  display: flex;
  position: relative;
`;
