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
  ButtonHistoric,
} from "./styles";
import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { PiReceiptLight, PiSignOut } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Search } from "../Search";
import { ButtonOrder } from "../ButtonOrder";
import { NavOffCanvas } from "../NavOffCanvas";
import { ButtonText } from "../ButtonText";
import { useAuth } from "../../hook/auth";
import { useCart } from "../../hook/CartStore";

export function Header({ search }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { cart } = useCart();
  const admin = user?.isAdmin;

  function handleShowNavOffCanvas() {
    setShowMenu(showMenu ? false : true);
    document.getElementById("hamburger").classList.toggle("active");
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

        {!admin && (
          <ButtonFavorite>
            <ButtonText
              title="Meus favoritos"
              onClick={() => navigate("/favorites")}
            />
          </ButtonFavorite>
        )}
        <ButtonHistoric admin={admin}>
          <ButtonText
            title={!admin ? "Histórico de pedidos" : "Pedidos"}
            onClick={() => navigate("/historic")}
          />
        </ButtonHistoric>
        {admin && admin ? (
          <ButtonOrder
            name="Novo prato"
            onClick={() => navigate("/product/new")}
          />
        ) : (
          <ButtonOrder
            name={`Pedidos (${cart?.length})`}
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
          <div className="hamburger" id="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </ContainerAlt>

        <Logo admin={admin} onClick={() => navigate("/")} />

        {!admin && (
          <Order onClick={handleNavigateToOrders}>
            <PiReceiptLight size={34} />
            <Circle>{cart?.length}</Circle>
          </Order>
        )}
      </HeaderMobile>
      <NavOffCanvas
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        search={search}
      />
    </Container>
  );
}
