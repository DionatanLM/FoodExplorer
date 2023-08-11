import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useFavorites } from "../../hook/FavoriteDishesStore";
import { api } from "../../service/api";
import {
  Container,
  LimitPageMobile,
  MyFavorites,
  Title,
  FavoriteList,
  FavoriteItem,
  ProductImage,
  ContainerInfo,
  ProductTitle,
  ButtonRemoveFavorite,
} from "./styles";

export function Favorites() {
  const { favorites, removeDishFromFavorite } = useFavorites();

  return (
    <Container>
      <Header />
      <LimitPageMobile>
        <MyFavorites>
          <Title>Meus favoritos</Title>

          <FavoriteList>
            {favorites.map((item, index) => (
              <FavoriteItem key={index}>
                <ProductImage>
                  <img
                    src={`${api.defaults.baseURL}/files/${item.image}`}
                    alt={item.title}
                  />
                </ProductImage>
                <ContainerInfo>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ButtonRemoveFavorite
                    onClick={() => removeDishFromFavorite(item)}
                    type="button"
                  >
                    Remover dos Favoritos
                  </ButtonRemoveFavorite>
                </ContainerInfo>
              </FavoriteItem>
            ))}
          </FavoriteList>
        </MyFavorites>
      </LimitPageMobile>
      <Footer />
    </Container>
  );
}
