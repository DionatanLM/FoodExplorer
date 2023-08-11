import {
  Container,
  HeaderLimit,
  Logout,
  Logo,
  HeaderMobile,
  ContainerAlt,
  Order,
  Circle,
  ButtonFavorite,
} from "./styles";
import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { PiReceiptLight, PiSignOut } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { Search } from "../Search";
import { ButtonOrder } from "../ButtonOrder";
import { NavOffCanvas } from "../NavOffCanvas";
import { ButtonText } from "../ButtonText";
import { useAuth } from "../../hook/auth";

export function Header({ search }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const admin = user?.isAdmin;

  function handleShowNavOffCanvas() {
    setShowMenu(true);
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleNavigateToOrders() {
    navigate("/orders");
  }
  return (
    <Container>
      <HeaderLimit>
        <Logo admin={admin} onClick={() => navigate("/")} />

        <Search
          placeholder="Busque por pratos ou ingredientes"
          icon={GrSearch}
          onChange={(e) => {
            search(e.target.value);
          }}
        />

        <ButtonFavorite>
          {!admin && (
            <ButtonText
              title="Meus favoritos"
              onClick={() => navigate("/favorites")}
            />
          )}
        </ButtonFavorite>
        {admin && admin ? (
          <ButtonOrder
            name="Novo prato"
            onClick={() => navigate("/product/new")}
          />
        ) : (
          <ButtonOrder
            name={`Pedidos (0)`}
            icon={PiReceiptLight}
            onClick={handleNavigateToOrders}
          />
        )}

        <Logout onClick={handleSignOut}>
          <PiSignOut size={30} />
        </Logout>
      </HeaderLimit>
      <HeaderMobile>
        <ContainerAlt onClick={handleShowNavOffCanvas}>
          <RxHamburgerMenu size={30} />
        </ContainerAlt>

        <Logo admin={admin} onClick={() => navigate("/")} />

        {!admin && (
          <Order onClick={handleNavigateToOrders}>
            <PiReceiptLight size={34} />
            <Circle>0</Circle>
          </Order>
        )}
      </HeaderMobile>
      {showMenu && <NavOffCanvas active={setShowMenu} admin={admin} />}
    </Container>
  );
}
