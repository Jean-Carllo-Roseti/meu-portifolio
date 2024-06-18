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

  const scrollToAnchor = (id: string) => {
    const header = document.querySelector('header')
    if (!header) return // Verifica se o header existe

    const headerHeight = header.offsetHeight
    const extraOffset = 20 // Espaçamento extra para garantir que o título não seja ocultado
    const element = document.getElementById(id)
    if (element) {
      const offsetPosition = element.offsetTop - headerHeight - extraOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <HContainer className={scrolled ? 'scrolled' : ''}>
      <Hcontent>
        <h1>Jean Carllo</h1>
        <Hlist>
          <li>
            <a onClick={() => scrollToAnchor('sobre')} href="#sobre">
              Sobre{' '}
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToAnchor('habilidades')}
              href="#habilidades"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a onClick={() => scrollToAnchor('projetos')} href="#projetos">
              Projetos
            </a>
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
