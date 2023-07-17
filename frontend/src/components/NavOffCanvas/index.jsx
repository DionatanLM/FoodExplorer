import { useEffect, useState } from 'react'
import { Container, HeaderMobile, Text } from './styles'
import { CgClose } from 'react-icons/cg'

export function NavOffCanvas({ showMenu, setShowMenu }) {
  useEffect(() => {
    document.body.style.overflowY = showMenu ? 'hidden' : 'auto';
  }, [showMenu]);

  return (
    <Container isVisible={showMenu}>
      <HeaderMobile>
        <CgClose size={30} onClick={() => setShowMenu(false)}/>
        <Text>Menu</Text>
      </HeaderMobile>
    </Container>
  )
}
