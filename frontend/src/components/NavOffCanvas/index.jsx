import { GrSearch } from 'react-icons/gr'
import { Search } from '../Search'
import { Container, HeaderMobile, Text, Content, ItemMenu } from './styles'
import { CgClose } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/auth'

export function NavOffCanvas({ active, admin }) {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  const closeSidebar = () => {
    active(false)
  }

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <Container sidebar={active}>
      <HeaderMobile>
        <CgClose size={30} onClick={closeSidebar} />
        <Text>Menu</Text>
      </HeaderMobile>
      <Content>
        <Search
          placeholder="Busque por pratos ou ingredientes"
          icon={GrSearch}
        />
        {!!admin && (
          <ItemMenu onClick={() => navigate('/product/new')}>
            Novo prato
          </ItemMenu>
        )}
        <ItemMenu onClick={() => navigate('/historic')}>
          Histórico de pedidos
        </ItemMenu>
        {!admin && (
          <ItemMenu onClick={() => navigate('/favorites')}>
            Meus favoritos
          </ItemMenu>
        )}

        <ItemMenu onClick={handleSignOut}>Sair</ItemMenu>
      </Content>
    </Container>
  )
}
