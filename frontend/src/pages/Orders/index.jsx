import { useState } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  Container,
  LimitPageMobile,
  MyOrder,
  OrderTitle,
  OrderList,
  OrderItem,
  ProductImage,
  ContainerInfo,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  ButtonProductDelete,
  OrderTotal,
  Payment,
  PaymentTitle,
  PaymentCard,
  PaymentButton,
  ContainerInput,
} from "./styles";
import { PixIcon } from "../../icons/PixIcon";
import { PiCreditCard, PiReceiptLight } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText";
import { QrCode } from "../../icons/QrCode";
import { Input } from "../../components/Input";
import { ButtonOrder } from "../../components/ButtonOrder";
import { Button } from "../../components/Button";
import ClockIcon from "../../icons/ClockIcon";
import ShowScreenForDuration from "../../components/PaymentStatus";
import { moneyToPtBrTwoPrecision } from "../../helpers/currency.helper";
import { useCart } from "../../hook/CartStore";
import {
  maskCVV,
  maskCreditCard,
  maskExpirationDate,
} from "../../helpers/mask.helper";
import { validateCreditCardNumber } from "../../helpers/validation.helper";
import PaymentStatus from "../../components/PaymentStatus";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export function Orders() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [paymentProgress, setPaymentProgress] = useState(false);
  const navigate = useNavigate();

  const [typePayment, setTypePayment] = useState("pix");
  const [pageNumber, setPageNumber] = useState(1);
  const { cart, total, handleRemoveDishFromCart, handleResetCart } = useCart();

  const handleSubmitPix = async (event) => {
    setPaymentProgress(true);

    const formObj = {
      orderStatus: "1",
      totalPrice: total,
      paymentMethod: "pix",
      cart,
    };

    try {
      setFormErrors({});
      await api.post("/orders", formObj);
      setTimeout(() => {
        navigate("/historic");
      }, 3500);
      handleResetCart();
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmitCredit = async (event) => {
    const errors = {};

    try {
      if (
        !cardNumber ||
        cardNumber.length < 19 ||
        !validateCreditCardNumber(cardNumber)
      ) {
        errors.cardNumber = "Número do cartão inválido";
      }

      if (!expiryDate || expiryDate.length < 5) {
        errors.expiryDate = "Validade do cartão inválido";
      }

      if (!cvv || cvv.length < 3) {
        errors.cvv = "CVV do cartão inválido";
      }

      if (Object.keys(errors).length === 0) {
        setFormErrors({});
        const formObj = {
          orderStatus: "1",
          totalPrice: total,
          paymentMethod: "credito",
          cart,
        };
        await api.post("/orders", formObj);
        setTimeout(() => {
          navigate("/historic");
        }, 3500);
        handleResetCart();
      } else {
        setFormErrors(errors);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (event, inputName) => {
    const inputValue = event.target.value;
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [inputName]: undefined,
    }));

    switch (inputName) {
      case "cardNumber":
        setCardNumber(inputValue);
        break;
      case "expiryDate":
        setExpiryDate(inputValue);
        break;
      case "cvv":
        setCvv(inputValue);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Header />
      <LimitPageMobile>
        <MyOrder pageNumber={pageNumber}>
          <OrderTitle>Meu pedido</OrderTitle>

          <OrderList>
            {cart.map((item, index) => (
              <OrderItem key={index}>
                <ProductImage>
                  <img src={item.image} alt={item.title} />
                </ProductImage>
                <ContainerInfo>
                  <ProductInfo>
                    <ProductTitle>
                      {item.quantity} x {item.title}
                    </ProductTitle>
                    <ProductPrice>
                      {moneyToPtBrTwoPrecision(item.price)}
                    </ProductPrice>
                  </ProductInfo>
                  <ButtonProductDelete
                    onClick={() => handleRemoveDishFromCart(item.id)}
                  >
                    Excluir
                  </ButtonProductDelete>
                </ContainerInfo>
              </OrderItem>
            ))}
          </OrderList>

          <OrderTotal>Total: {moneyToPtBrTwoPrecision(total)}</OrderTotal>
          {total > 0 && (
            <Button
              name="Avançar"
              onClick={() => setPageNumber(2)}
              className="buttonAdvance"
              pageNumber={pageNumber}
            />
          )}
        </MyOrder>

        <Payment pageNumber={pageNumber}>
          <PaymentTitle>Pagamento</PaymentTitle>
          <PaymentButton>
            <ButtonText
              title="PIX"
              onClick={() => setTypePayment("pix")}
              icon={PixIcon}
              isActive={typePayment === "pix"}
            />
            <ButtonText
              title="Crédito"
              onClick={() => setTypePayment("credito")}
              icon={PiCreditCard}
              isActive={typePayment === "credito"}
            />
          </PaymentButton>
          <PaymentCard>
            {typePayment === "pix" ? (
              !paymentProgress ? (
                <a onClick={() => total && handleSubmitPix()}>
                  <QrCode />
                </a>
              ) : (
                <PaymentStatus />
              )
            ) : (
              <>
                <Input
                  label="Número do Cartão"
                  placeholder="Ex: 0000 0000 0000 0000"
                  maxLength={19}
                  value={maskCreditCard(cardNumber)}
                  onChange={(e) => handleInputChange(e, "cardNumber")}
                />
                {formErrors.cardNumber && (
                  <span className="error">{formErrors.cardNumber}</span>
                )}
                <ContainerInput>
                  <Input
                    label="Validade"
                    placeholder="Ex: 04/25"
                    maxLength={5}
                    value={maskExpirationDate(expiryDate)}
                    onChange={(e) => handleInputChange(e, "expiryDate")}
                  />

                  <Input
                    label="CVC"
                    placeholder="Ex: 000"
                    maxLength={3}
                    value={maskCVV(cvv)}
                    onChange={(e) => handleInputChange(e, "cvv")}
                  />
                </ContainerInput>
                {formErrors.expiryDate && (
                  <span className="error">{formErrors.expiryDate}</span>
                )}
                {formErrors.cvv && (
                  <span className="error2">{formErrors.cvv}</span>
                )}

                <ButtonOrder
                  name={`Finalizar pagamento`}
                  icon={PiReceiptLight}
                  type="submit"
                  onClick={() =>
                    typePayment === "credito" && handleSubmitCredit()
                  }
                />
              </>
            )}
          </PaymentCard>
          <ContainerInput>
            <Button
              name="Voltar"
              onClick={() => setPageNumber(1)}
              className="buttonBack"
              pageNumber={pageNumber}
            />
          </ContainerInput>
        </Payment>
      </LimitPageMobile>
      <Footer />
    </Container>
  );
}
