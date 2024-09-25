import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFileAlt
} from 'react-icons/fa'
import {
  SbContainer,
  SbContent,
  SbOrganiza,
  Descricao,
  Imagem,
  Contatos
} from './styles'

import Foto from '../../assets/images/jeanPerfil.jpeg'

const SobreMim = () => {
  return (
    <SbContainer>
      <SbOrganiza>
        <h2>Desenvolvedor Front-End</h2>
        <SbContent>
          <Imagem>
            <img src={Foto} alt="imagem do titular do portifólio" />
            <Contatos>
              <a
                href="https://github.com/Jean-Carllo-Roseti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/jean-carllo-roseti/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a href="mailto:jcmar.dev@gmail.com">
                <FaEnvelope size={30} />
              </a>
              <a
                href="https://wa.me/5513991166494"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} />
              </a>
              <a href="/JeanEBAC.pdf" download rel="noopener noreferrer">
                <FaFileAlt size={30} />
              </a>
            </Contatos>
          </Imagem>
          <Descricao>
            <p>
              <strong>Olá me chamo Jean Carllo.</strong> <br /> Transitei da
              Engenharia Elétrica para a Programação, trazendo comigo um olhar
              crítico e analítico para a solução de problemas, além de
              habilidades de coordenação e trabalho em equipe desenvolvidas ao
              longo de 5 anos no setor de engenharia clínica em hospitais.
              <br />
              <br />
              Minha paixão pela tecnologia me levou a explorar o desenvolvimento
              de software. Desde o final de 2022, estou cursando programação na
              Escola Britânica de Artes Criativas e Tecnologia -
              <strong> EBAC</strong>. Durante esse período, adquiri
              conhecimentos em:
              <br />
              <strong>
                HTML, CSS, JavaScript, Less, Sass, React, Redux Git e Cypress.
              </strong>
              <br />
              Este aprendizado intensivo fortaleceu minhas habilidades em
              front-end e me proporcionou uma base sólida para continuar
              evoluindo na área.
              <br />
              <br />
              <strong>
                Hard Skills: JavaScript Desenvolvimento Front-end.
              </strong>
              <br />
              <br />
              <strong>
                Soft Skills: Comunicação eficaz, Trabalho em equipe, Capacidade
                de resolver problemas.
                <br />
                <br /> Evolução: Back-End em Java, PostgreSQL, Hibernate, JUnit,
                MongoDB e Spring Boot.
              </strong>
            </p>
          </Descricao>
        </SbContent>
      </SbOrganiza>
    </SbContainer>
  )
}

export default SobreMim
