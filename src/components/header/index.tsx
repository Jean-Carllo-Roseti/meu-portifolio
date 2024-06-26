import { useEffect, useState } from 'react'
import {
  HContainer,
  HamLink,
  Hamburguer,
  HamburguerContent,
  Hcontent,
  Hlist
} from './styles'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HContainer className={scrolled ? 'scrolled' : ''}>
      <Hcontent>
        <h1>Jean Carllo</h1>
        <Hlist>
          <li>
            <a href="#sobre">Sobre </a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
        </Hlist>
      </Hcontent>
      <HamburguerContent>
        <Hamburguer
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={isMenuOpen ? 'open' : ''}
        >
          <span />
          <span />
          <span />
        </Hamburguer>
      </HamburguerContent>
      <HamLink className={isMenuOpen ? 'is-open' : ''}>
        <Hlist>
          <li>
            <a href="#sobre">Sobre </a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
        </Hlist>
      </HamLink>
    </HContainer>
  )
}

export default Header
