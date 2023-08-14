import styled from 'styled-components'

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
`
export const LimitPage = styled.div`
  max-width: 1122px;
  margin: 34px auto;
  height: 80vh;

  display: flex;
  flex-direction: column;

  @media (max-width: 1090px) {
    gap: 17px;
    padding: 0 20px;
  }
`

export const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  margin-bottom: 32px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`
export const Tr = styled.tr``

export const Th = styled.th`
  padding: 21px 24px;
  text-align: left;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 8px;
  overflow: hidden;
`

export const Td = styled.td`
  padding: 21px 24px;

  text-align: left;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
`

export const TableMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  padding: 16px 20px;

  @media (min-width: 768px) {
    display: none;
  }
`

export const TableContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
