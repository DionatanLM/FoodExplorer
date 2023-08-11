import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Carrousel } from "../../components/Carrousel";
import { Header } from "../../components/Header";
import {
  Container,
  LimitPageMobile,
  CategorySection,
  CategoryTitle,
} from "./styles";
import { moneyToPtBrTwoPrecision } from "../../helpers/currency.helper";
import { useAuth } from "../../hook/auth";
import { useEffect, useState } from "react";
import { api } from "../../service/api";

export function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const admin = user?.isAdmin;

  useEffect(() => {
    async function getDishesByCategory() {
      const response = await api.get(`/categories/dishes?title=${search}`);
      setData(response.data);
    }
    getDishesByCategory();
  }, [search]);

  return (
    <Container>
      <Header search={setSearch} />
      <LimitPageMobile>
        <Banner />
       
        {data?.map((category, index) => (
          <CategorySection key={index}>
            <CategoryTitle>{category.name}</CategoryTitle>
            <Carrousel>
              {category.dishes?.map((dish, index) => (
                <Card
                  key={String(index)}
                  image={dish.image}
                  title={dish.title}
                  description={dish.description}
                  price={moneyToPtBrTwoPrecision(dish.price)}
                  admin={admin}
                  url={dish.id}
                  data={dish}
                />
              ))}
            </Carrousel>
          </CategorySection>
        ))}
      </LimitPageMobile>
      <Footer />
    </Container>
  );
}
