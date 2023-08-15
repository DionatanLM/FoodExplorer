import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  Container,
  LimitPageMobile,
  Back,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  Ingredients,
  IngredientsText,
  AmountContainer,
  Amount,
} from "./styles";
import { PiCaretLeft } from "react-icons/pi";
import { ButtonText } from "../../components/ButtonText";
import { MdAdd, MdRemove } from "react-icons/md";
import { Button } from "../../components/Button";
import { useAuth } from "../../hook/auth";
import { api } from "../../service/api";
import { useCart } from "../../hook/CartStore";
import { moneyToPtBrTwoPrecision } from "../../helpers/currency.helper";

export function Product() {
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const params = useParams();
  const { handleAddDishToCart } = useCart();

  const imageURL = data
    ? `${api.defaults.baseURL}/files/${data?.image}`
    : imagePlaceholder;

  const admin = user?.isAdmin;

  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();

  function handleAmountAdd() {
    setAmount(amount + 1);
  }
  function handleAmountRemove() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function getDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    getDish();
  }, []);

  return (
    <Container>
      <Header admin={admin} />
      <LimitPageMobile>
        <Back>
          <ButtonText title="voltar" onClick={handleBack} icon={PiCaretLeft} />
        </Back>

        <ProductContainer>
          <ProductImage>
            <img src={imageURL} alt={"Prato"} />
          </ProductImage>
          <ProductInfo>
            <ProductTitle>{data?.title}</ProductTitle>
            <ProductDescription>{data?.description}</ProductDescription>
            <Ingredients>
              {data.ingredients?.map((ingredient, index) => (
                <IngredientsText key={index}>
                  {ingredient?.name}
                </IngredientsText>
              ))}
            </Ingredients>
            <AmountContainer admin={admin}>
              {admin ? (
                <Button
                  name={"Editar prato"}
                  onClick={() => navigate(`/product/edit/${data?.id}`)}
                />
              ) : (
                <>
                  <Amount>
                    <MdRemove size={20} onClick={handleAmountRemove} />
                    <input type="text" readOnly value={amount} />
                    <MdAdd size={20} onClick={handleAmountAdd} />
                  </Amount>
                  <Button
                    name={`incluir ∙ ${moneyToPtBrTwoPrecision(
                      data?.price * amount
                    )}`}
                    onClick={() => handleAddDishToCart(data, amount, imageURL)}
                  />
                </>
              )}
            </AmountContainer>
          </ProductInfo>
        </ProductContainer>
      </LimitPageMobile>
      <Footer />
    </Container>
  );
}
