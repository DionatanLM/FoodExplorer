import { useEffect, useState } from "react";
import { Button } from "../Button";
import {
  Container,
  Image,
  Title,
  Description,
  Price,
  AmountContainer,
  Amount,
  FavoriteIcon,
} from "./styles";
import { MdRemove, MdAdd, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { PiPencilSimpleLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useFavorites } from "../../hook/FavoriteDishesStore";
import { useCart } from "../../hook/CartStore";

export function Card({ image, url, title, description, price, admin, data }) {
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();
  const { favorites, addDishToFavorite, removeDishFromFavorite } =
    useFavorites();
  const { handleAddDishToCart } = useCart();

  const isFavorite = favorites?.some((dish) => dish.title === data.title);

  const imageURL = image
    ? `${api.defaults.baseURL}/files/${image}`
    : imagePlaceholder;

  function handleAmountAdd() {
    setAmount(amount + 1);
  }
  function handleAmountRemove() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  function handleNavigateDash() {
    navigate(`/product/${url}`);
  }

  return (
    <Container className="card">
      <FavoriteIcon
        onClick={() =>
          isFavorite ? removeDishFromFavorite(data) : addDishToFavorite(data)
        }
      >
        {admin ? (
          <PiPencilSimpleLight
            size={30}
            onClick={() => navigate(`/product/edit/${url}`)}
          />
        ) : isFavorite ? (
          <MdFavorite size={30} color="#750310" />
        ) : (
          <MdFavoriteBorder size={30} />
        )}
      </FavoriteIcon>
      <Image onClick={handleNavigateDash}>
        <img src={imageURL} />
      </Image>

      <Title onClick={handleNavigateDash}>{title}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
      {!admin && (
        <AmountContainer>
          <Amount>
            <MdRemove size={20} onClick={handleAmountRemove} />
            <input type="text" readOnly value={amount} />
            <MdAdd size={20} onClick={handleAmountAdd} />
          </Amount>
          <Button
            name={"Incluir"}
            onClick={() => handleAddDishToCart(data, amount, imageURL)}
          />
        </AmountContainer>
      )}
    </Container>
  );
}
