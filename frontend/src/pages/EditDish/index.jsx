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
} from "../NewDish/styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useNavigate, useParams } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { IngredientItem } from "../../components/IngredientItem";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../service/api";
import { moneyToPtBr, unformatPrice } from "../../helpers/currency.helper";
import { maskCurrency } from "../../helpers/mask.helper";

export function EditDish() {
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [categorySelected, setCategorySelected] = useState();
  const [imgDishFile, setImgDishFile] = useState();

  const [categoriesData, setCategoriesData] = useState();
  const [dataEdit, setDataEdit] = useState();
  const [newIngredient, setNewIngredient] = useState("");

  useEffect(() => {
    async function getDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setDataEdit(response.data);
      setTitle(response.data.title);
      setPrice(response.data.price);
      setIngredients(
        response.data.ingredients.map((ingredient) => ingredient.name)
      );
      setDescription(response.data.description);
      setImgDishFile(response.data.image);
      setCategorySelected(response.data.category_id);
    }

    getDish();
  }, [params.id]);

  const handleRemoveIngredient = (deletedTag) => {
    const updatedIngredients = ingredients.filter(
      (ingredient) => ingredient !== deletedTag
    );
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      setNewIngredient("");
    }
  };


  const handleCreateDish = async (e) => {
    e.preventDefault();
    try {
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

      api
        .put(`/dishes/${params.id}`, formData)
        .then(alert("Prato editado com sucesso!"), navigate("/"))
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Erro ao criar o prato!");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteDish = async () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este prato?"
    );

    if (confirmDelete) {
      try {
        await api.delete(`/dishes`, { data: { id: dataEdit.id } });
        navigate(-1);
      } catch (error) {
        console.error("Erro ao excluir o prato:", error);
      }
    }
  };

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
        <Title>{"Editar prato"}</Title>
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
                <FiUpload size={30} className="iconImg" />

                {dataEdit?.image || imgDishFile?.name
                  ? "Imagem selecionada."
                  : "Selecione a imagem"}
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
              value={categorySelected}
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
                {ingredients.map((ingredient, index) => (
                  <IngredientItem
                    key={String(index)}
                    value={ingredient.name ? ingredient.name : ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                <IngredientItem
                  isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
                />
              </Tags>
            </Section>

            <Input
              placeholder="R$ 00,00"
              label="Preço"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
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
              name="Excluir prato"
              className="buttonDelete"
              onClick={handleDeleteDish}
            />
            <Button
              name="Salvar alterações"
              className="button"
              type="submit"
              onClick={handleCreateDish}
            />
          </ContainerButton>
        </Form>
      </LimitPageMobile>
      <Footer />
    </Container>
  );
}
