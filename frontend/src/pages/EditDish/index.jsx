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
import {
  formatPrice,
  moneyToPtBrTwoPrecision,
} from "../../helpers/currency.helper";

export function EditDish() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [imgDishFile, setImgDishFile] = useState();

  const [dataEdit, setDataEdit] = useState({
    name: "",
    category_id: "",
    ingredients: [],
    price: "",
    description: "",
  });
  const imageURL =
    dataEdit && `${api.defaults.baseURL}/files/${dataEdit.image}`;

  const [imgDish, setImgDish] = useState(imageURL);

  const navigate = useNavigate();
  const params = useParams();
  const isEditing = !!params.id;

  const handleRemoveTag = (deletedTag) => {
    if (isEditing) {
      const updatedIngredients = dataEdit.ingredients.filter(
        (tag) => tag.id !== deletedTag.id
      );
      setDataEdit((prevData) => ({
        ...prevData,
        ingredients: updatedIngredients,
      }));
    } else {
      setTags((prevState) => prevState.filter((tag) => tag !== deletedTag));
    }
  };

  const handleAddTag = () => {
    if (isEditing) {
      const updatedIngredients = [...dataEdit.ingredients, { name: newTag }];
      setDataEdit((prevData) => ({
        ...prevData,
        ingredients: updatedIngredients,
      }));
    } else {
      setTags((prevState) => [...prevState, newTag]);
    }
    setNewTag("");
  };

  const handleCreateDish = () => {
    //console.log();
  };

  const handleEditDish = (e) => {
    e.preventDefault();
    console.log("edit");
  };

  const handleDeleteDish = () => {
    //console.log();
  };

  function handleChangeImage(e) {
    const file = e.target.files[0];
    setImgDishFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImgDish(imagePreview);
  }

  useEffect(() => {
    async function getDish() {
      if (isEditing) {
        const response = await api.get(`/dishes/${params.id}`);
        setDataEdit(response.data);
      }
    }

    getDish();
  }, [isEditing, params.id]);

  console.log(imgDish, "imgDish");
  console.log(imgDishFile, "imgDishFile");
  console.log(dataEdit);
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
        <Title>{params.id ? "Editar prato" : "Adicionar prato"}</Title>
        <Form>
          <ContainerInput>
            <InputImage>
              <label className="titleImg">Imagem do prato</label>
              <label htmlFor="imgDish" className="imgDish">
                <input id="imgDish" type="file" onChange={handleChangeImage} />
                <FiUpload size={30} />

                {imgDishFile ? imgDishFile.name : <span>Selecione imagem</span>}
              </label>
            </InputImage>
            <Input
              placeholder="Ex: Salada Ceasar"
              type="text"
              label="Nome"
              value={isEditing ? dataEdit.title : title}
              onChange={(e) => {
                if (isEditing) {
                  setDataEdit((prevData) => ({
                    ...prevData,
                    title: e.target.value,
                  }));
                } else {
                  setTitle(e.target.value);
                }
              }}
            />
            <Select type="text" label="Categoria">
              <option value="1">Massas</option>
              <option value="2">Carnes</option>
              <option value="3">Saladas</option>
              <option value="4">Sobremesas</option>
              <option value="5">Bebidas</option>
            </Select>
          </ContainerInput>
          <ContainerInput>
            <Section title="Marcadores">
              <label>Ingredientes</label>
              <Tags className="tags">
                {(isEditing ? dataEdit.ingredients : tags).map((tag, index) => (
                  <IngredientItem
                    key={String(index)}
                    value={isEditing ? tag.name : tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}
                <IngredientItem
                  isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </Tags>
            </Section>

            <Input
              placeholder="R$ 00,00"
              label="Preço"
              value={
                isEditing ? formatPrice(dataEdit.price) : formatPrice(price)
              }
              onChange={(e) => {
                if (isEditing) {
                  setDataEdit((prevData) => ({
                    ...prevData,
                    price: e.target.value,
                  }));
                } else {
                  setPrice(e.target.value);
                }
              }}
              widthContainer={{ width: "300px" }}
            />
          </ContainerInput>
          <Input
            label="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            type="textarea"
            value={isEditing ? dataEdit.description : description}
            onChange={(e) => {
              if (isEditing) {
                setDataEdit((prevData) => ({
                  ...prevData,
                  description: e.target.value,
                }));
              } else {
                setDescription(e.target.value);
              }
            }}
            textarea
          />
          <ContainerButton>
            {!isEditing && (
              <Button
                name="Excluir prato"
                className="buttonDelete"
                onClick={handleDeleteDish}
              />
            )}
            <Button
              name="Salvar alterações"
              className="button"
              type="submit"
              onClick={!isEditing ? handleCreateDish : handleEditDish}
            />
          </ContainerButton>
        </Form>
      </LimitPageMobile>
      <Footer />
    </Container>
  );
}
