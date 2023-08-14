import { useState } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import {
  Container,
  LimitPage,
  Title,
  Table,
  Tr,
  Th,
  Td,
  TableMobile,
  TableContainer
} from './styles'

export function OrderHistoric() {
  return (
    <Container>
      <Header />
      <LimitPage>
        <Title>Histórico de pedidos</Title>
        <Table>
          <Tr>
            <Th>Status</Th>
            <Th>Código</Th>
            <Th>Detalhamento</Th>
            <Th>Data e Hora</Th>
          </Tr>
          <Tr>
            <Td>Concluído</Td>
            <Td>001</Td>
            <Td>Tarefa completada com sucesso.</Td>
            <Td>2023-08-13 10:00</Td>
          </Tr>
          <Tr>
            <Td>Pendente</Td>
            <Td>002</Td>
            <Td>Revisar relatório antes de finalizar.</Td>
            <Td>2023-08-13 14:30</Td>
          </Tr>
          <Tr>
            <Td>Falha</Td>
            <Td>003</Td>
            <Td>Erro ao processar pagamento.</Td>
            <Td>2023-08-13 16:45</Td>
          </Tr>
        </Table>
        <TableMobile>
          <TableContainer>
            <p>00002</p>
            <p>Pendente</p>
            <p>20/05 às 18h00</p>
          </TableContainer>
          1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco
          de Maracujá
        </TableMobile>
      </LimitPage>
      <Footer />
    </Container>
  )
}
