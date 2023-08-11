import { useEffect, useState } from "react";
import { PiCaretLeft } from "react-icons/pi";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  Container,
  LimitPageMobile,
  Back,
  Form,
  Title,
  InputImage,
  ContainerInput,
  Section,
  Tags,
  ContainerButton,
} from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { IngredientItem } from "../../components/IngredientItem";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../service/api";
import { formatPrice, unformatPrice } from "../../helpers/currency.helper";

export function NewDish() {
  const [loading, setLoading] = useState(false);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categorySelected, setCategorySelected] = useState();

  const [categoriesData, setCategoriesData] = useState();

  const [imgDishFile, setImgDishFile] = useState();

  const navigate = useNavigate();

  const handleRemoveTag = (deleted) => {
    setIngredients((prevState) => prevState.filter((tag) => tag !== deleted));
    setNewIngredient("");
  };

  const handleAddTag = () => {
    if (newIngredient.length < 3) {
      return alert("Erro: Insira um nome maior que 3 letras");
    }
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  const handleCreateDish = async (event) => {
    event.preventDefault();
    if (!imgDishFile) {
      return alert("Erro: Você não inseriu uma imagem para o prato!");
    }

    if (!title) {
      return alert("Erro: Você não informou o nome do prato!");
    }

    if (ingredients.length < 1) {
      return alert("Erro: Adicione pelo menos um ingrediente!");
    }

    if (newIngredient) {
      return alert(
        "Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!"
      );
    }

    if (!categorySelected) {
      return alert("Erro: Você não selecionou a categoria do prato!");
    }

    if (!price) {
      return alert("Erro: Você não informou o preço do prato!");
    }

    if (!description) {
      return alert("Erro: Você não informou uma descrição para o prato!");
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", imgDishFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category_id", Number(categorySelected));
    formData.append("price", unformatPrice(price));
    const ingredientsArray = Array.isArray(ingredients)
      ? ingredients
      : [ingredients];
    ingredientsArray.forEach((ingredient) =>
      formData.append("ingredients[]", ingredient)
    );

    console.log(formData, "formData");

    await api
      .post("/dishes", formData)
      .then(alert("Prato adicionado com sucesso!"), navigate("/"))
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao criar o prato!");
        }
      });

    setLoading(false);
  };

  function handleChangeImage(e) {
    const file = e.target.files[0];
    setImgDishFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImgDish(imagePreview);
  }

  useEffect(() => {
    async function getCategories() {
      const response = await api.get("/categories");
      setCategoriesData(response.data);
    }
    getCategories();
  }, []);

  return (
    <Container>
      <Header />
      <LimitPageMobile>
        <Back>
          <ButtonText
            title="voltar"
            onClick={() => navigate(-1)}
            icon={PiCaretLeft}
          />
        </Back>
        <Title>{"Adicionar prato"}</Title>
        <Form>
          <ContainerInput>
            <InputImage>
              <label className="titleImg">Imagem do prato</label>
              <label htmlFor="imgDish" className="imgDish">
                <input
                  id="imgDish"
                  type="file"
                  onChange={(e) => setImgDishFile(e.target.files[0])}
                />
                <FiUpload size={30} />

                {imgDishFile ? imgDishFile.name : <span>Selecione imagem</span>}
              </label>
            </InputImage>
            <Input
              placeholder="Ex: Salada Ceasar"
              type="text"
              label="Nome"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Select
              type="text"
              label="Categoria"
              onChange={(e) => setCategorySelected(e.target.value)}
              defaultValue="default"
            >
              <option value="default" disabled>
                Selecione a categoria
              </option>
              {categoriesData?.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </ContainerInput>
          <ContainerInput>
            <Section title="Marcadores">
              <label>Ingredientes</label>
              <Tags className="tags">
                {ingredients.map((tag, index) => (
                  <IngredientItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}
                <IngredientItem
                  isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddTag}
                />
              </Tags>
            </Section>

            <Input
              placeholder="R$ 0,00"
              label="Preço"
              value={price}
              onChange={(e) => {
                setPrice(formatPrice(e.target.value));
              }}
              widthContainer={{ width: "300px" }}
            />
          </ContainerInput>
          <Input
            label="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            type="textarea"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            textarea
          />
          <ContainerButton>
            <Button
              name="Salvar alterações"
              className="button"
              type="submit"
              onClick={handleCreateDish}
              loading={loading}
            />
          </ContainerButton>
        </Form>
      </LimitPageMobile>
      <Footer />
    </Container>
  );
}
