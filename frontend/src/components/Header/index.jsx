import {
  Container,
  HeaderLimit,
  Logout,
  Logo,
  HeaderMobile,
  ContainerAlt,
  LogoMobile,
  Order,
  Circle
} from './styles'
import { useState } from 'react'
import { GrSearch } from 'react-icons/gr'
import { PiReceiptLight, PiSignOut } from 'react-icons/pi'
import { RxHamburgerMenu } from 'react-icons/rx'
//import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom'
import { Search } from '../Search'
import { ButtonOrder } from '../ButtonOrder'
import { NavOffCanvas } from '../NavOffCanvas'

export function Header() {
  //const { signOut, user } = useAuth();
  const [showMenu, setShowMenu] = useState(false)

  const navigate = useNavigate()

  function handleShowNavOffCanvas() {
    setShowMenu(true)
  }

  function handleSignOut() {
    navigate('/')
    //signOut();
  }
  return (
    <Container>
      <HeaderLimit>
        <Logo />

        <Search
          placeholder="Busque por pratos ou ingredientes"
          icon={GrSearch}
        />

        <ButtonOrder name="Pedidos (0)" icon={PiReceiptLight} />

        <Logout onClick={handleSignOut}>
          <PiSignOut size={30} />
        </Logout>
      </HeaderLimit>
      {!showMenu && (
        <HeaderMobile>
          <ContainerAlt onClick={handleShowNavOffCanvas}>
            <RxHamburgerMenu size={30} />
          </ContainerAlt>

          <LogoMobile />

          <Order>
            <PiReceiptLight size={34} />
            <Circle>0</Circle>
          </Order>
        </HeaderMobile>
      )}
      {showMenu && <NavOffCanvas show={showMenu} setShowMenu={setShowMenu} />}
    </Container>
  )
}
