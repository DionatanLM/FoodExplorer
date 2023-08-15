import { GrSearch } from "react-icons/gr";
import { Search } from "../Search";
import { Container, Content, ItemMenu } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/auth";

export function NavOffCanvas({ setShowMenu, showMenu, search }) {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const admin = user?.isAdmin;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container sidebar={setShowMenu} showMenu={showMenu}>
      <Content>
        <Search
          placeholder="Busque por pratos ou ingredientes"
          icon={GrSearch}
          onChange={(e) => {
            search(e.target.value);
          }}
        />
        {!!admin && (
          <ItemMenu
            onClick={() => {
              navigate("/product/new");
              setShowMenu(false);
            }}
          >
            Novo prato
          </ItemMenu>
        )}
        <ItemMenu
          onClick={() => {
            navigate("/historic");
          }}
        >
          Histórico de pedidos
        </ItemMenu>
        {!admin && (
          <ItemMenu onClick={() => navigate("/favorites")}>
            Meus favoritos
          </ItemMenu>
        )}

        <ItemMenu onClick={handleSignOut}>Sair</ItemMenu>
      </Content>
    </Container>
  );
}
