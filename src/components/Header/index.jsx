import { useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, Menu, Li, DivShowMenu, MenuDefault } from './styles'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false)
    }
  }
  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="imagem-do-logo" />
      <DivShowMenu>
        <MenuDefault>
          <FiAlignJustify onClick={toggleMenu} size={50} />
        </MenuDefault>
        <Menu showMenu={showMenu}>
          <Li isActive={pathname === '/'}>
            <Link to="/">Home</Link>
          </Li>
          <Li isActive={pathname.includes('filmes')}>
            <Link to="/filmes">Filmes</Link>
          </Li>
          <Li isActive={pathname.includes('series')}>
            <Link to="/series">Séries</Link>
          </Li>
        </Menu>
      </DivShowMenu>
    </Container>
  )
}

export default Header
