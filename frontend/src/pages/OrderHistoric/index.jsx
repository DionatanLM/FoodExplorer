import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Select } from "../../components/Select";
import {
  Container,
  LimitPage,
  Title,
  Table,
  Tr,
  Th,
  Td,
  TableMobile,
  TableContainer,
  Circle,
  Status,
} from "./styles";
import { useAuth } from "../../hook/auth";
import { STATUS } from "../../constants/status.constants";
import { api } from "../../service/api";
import {
  formatDate,
  moneyToPtBrTwoPrecision,
} from "../../helpers/currency.helper";

export function OrderHistoric() {
  const [statusSelected, setStatusSelected] = useState("default");
  const [dataAllOrders, setDataAllOrders] = useState();
  const [dataOrders, setOrders] = useState();
  const { user } = useAuth();
  const admin = user?.isAdmin;

  const handleStatusChange = async (orderId, statusId) => {
    setStatusSelected(statusId);
    try {
      const formObj = {
        id: orderId,
        orderStatus: statusId,
      };
      await api.put("/orders", formObj);
    } catch (error) {
      console.error("Erro ao atualizar o status:", error);
    }
  };

  useEffect(() => {
    if (admin) {
      async function getAllOrders() {
        const response = await api.get("/orders/all");
        setDataAllOrders(response.data);
      }
      getAllOrders();
    }
  }, [statusSelected]);

  useEffect(() => {
    if (!admin) {
      async function getOrdersByUser() {
        const response = await api.get(`/orders`);
        setOrders(response.data);
      }
      getOrdersByUser();
    }
  });
  return (
    <Container>
      <Header />
      <LimitPage>
        <Title>{!admin ? "Histórico de pedidos" : "Todos os pedidos"}</Title>
        <Table>
          <Tr>
            <Th>Valor</Th>
            <Th>Status</Th>
            <Th>Código</Th>
            <Th>Detalhamento</Th>
            <Th>Data e Hora</Th>
          </Tr>
          {(admin ? dataAllOrders : dataOrders)?.map((order, index) => (
            <Tr key={index}>
              <Td>{moneyToPtBrTwoPrecision(order.totalPrice)}</Td>

              <Td>
                {admin ? (
                  <Select
                    defaultValue="default"
                    value={order.orderStatus || "default"}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                  >
                    <option value="default" disabled>
                      Selecione o status
                    </option>
                    {STATUS.map((status, index) => (
                      <option key={index} value={status.id}>
                        {status.color} {status.name}
                      </option>
                    ))}
                  </Select>
                ) : (
                  STATUS.map((status, index) => {
                    if (status.id === Number(order.orderStatus)) {
                      return (
                        <p key={index} value={order.orderStatus}>
                          {status.color} {status.name}
                        </p>
                      );
                    }
                  })
                )}
              </Td>
              <Td>{order.id}</Td>
              <Td>
                {order.items.map((item, index) => (
                  <p key={index}>
                    {item.quantity}x {item.title}
                  </p>
                ))}
              </Td>
              <Td>{formatDate(order.created_at)}</Td>
            </Tr>
          ))}
        </Table>
        {!admin && dataOrders?.length < 1 && (
          <p className="orderNone">
            Você ainda não realizou nenhum pedido. Faça seu primeiro pedido para
            ver o histórico aqui.
          </p>
        )}
        {(admin ? dataAllOrders : dataOrders)?.map((order, index) => (
          <TableMobile key={index}>
            <TableContainer>
              <p>{moneyToPtBrTwoPrecision(order.totalPrice)}</p>
              <p>Pedido #{order.id}</p>

              <p>{formatDate(order.created_at)}</p>
            </TableContainer>
            {!admin &&
              STATUS.map((status, index) => {
                if (status.id === Number(order.orderStatus)) {
                  return (
                    <div
                      className="statusContainer"
                      key={index}
                      value={order.orderStatus}
                    >
                      <p>Status:</p>
                      {status.color} {status.name}
                    </div>
                  );
                }
              })}
            <div className="statusContainer" key={index}>
              <p>Forma de pagamento:</p>
              {order.paymentMethod === "pix" ? "PIX" : "Cartão de crédito"}
            </div>
            {order.items.map((item, index) => (
              <p className="items" key={index}>
                {"  "}
                {item.quantity}x {item.title}
              </p>
            ))}
            {!!admin && (
              <Select
                defaultValue="default"
                value={order.orderStatus || "default"}
                onChange={(e) => handleStatusChange(order.id, e.target.value)}
              >
                <option value="default" disabled>
                  Selecione o status
                </option>
                {STATUS.map((status, index) => (
                  <option key={index} value={status.id}>
                    {status.color} {status.name}
                  </option>
                ))}
              </Select>
            )}
          </TableMobile>
        ))}
      </LimitPage>
      <Footer />
    </Container>
  );
}
