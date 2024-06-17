import Efood from '../../assets/images/Efood.png'
import Amiibo from '../../assets/images/Amiibo.png'
import SantsoCosm from '../../assets/images/SantosCosmeticos.png'
import Marvel from '../../assets/images/Marvel.png'
import Trade from '../../assets/images/TradePoints.png'

import {
  PortfolioContent,
  ProjectCard,
  ProjectImage,
  ProjectDetails,
  TechList,
  ProjectLinks,
  CardsColunas,
  ShowMoreButton,
  CardsVerMais
} from './styles'
import { useState } from 'react'

const principais = [
  {
    title: 'Efood',
    image: Efood,
    description:
      'Este projeto visa conectar os usuários a uma ampla rede de fornecedores de alimentos, incluindo restaurantes, lanchonetes e mercados. ',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://projeto6-parte1.vercel.app/',
    repoLink: 'https://github.com/Jean-Carllo-Roseti/projeto6Parte1'
  },
  {
    title: 'Amiibos',
    image: Amiibo,
    description:
      'Esta aplicação foi desenvolvida para oferecer uma consulta fácil sobre amiibos, fornecendo informações essenciais sobre cada lançamento e os jogos compatíveis.',
    technologies: ['React', 'Redux', 'Node.js'],
    liveLink: 'https://amiibo-xi.vercel.app/',
    repoLink: 'https://github.com/Jean-Carllo-Roseti/Amiibo'
  }
]

const outros = [
  {
    title: 'TradePoints',
    image: Trade,
    description:
      'Este projeto permite acumular pontos para trocar por diversos produtos  em uma ampla rede de parceiros. ',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://projeto6-parte1.vercel.app/',
    repoLink: 'https://github.com/Jean-Carllo-Roseti/projeto6Parte1'
  },
  {
    title: 'Santos Cosméticos',
    image: SantsoCosm,
    description:
      'Este projeto oferece produtos de cosméticos e higiene para o corpo em uma ampla rede de fornecedores.',
    technologies: ['React', 'Redux', 'Node.js'],
    liveLink: 'https://amiibo-xi.vercel.app/',
    repoLink: 'https://github.com/Jean-Carllo-Roseti/Amiibo'
  },
  {
    title: 'Marvel Fórum',
    image: Marvel,
    description:
      'Este projeto promove convenções, leilões de produtos para fãs, jogos e comic cons em uma ampla rede. ',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://projeto6-parte1.vercel.app/',
    repoLink: 'https://github.com/Jean-Carllo-Roseti/projeto6Parte1'
  }
]

const Projetos = () => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <PortfolioContent id="projetos">
      <h2>Meus Projetos</h2>
      <h3>Principais</h3>
      <CardsColunas>
        {principais.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectDetails>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <TechList>
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </TechList>
              <ProjectLinks>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código Fonte
                </a>
              </ProjectLinks>
            </ProjectDetails>
          </ProjectCard>
        ))}
      </CardsColunas>
      {showMore && (
        <>
          <h3>Outros Projetos</h3>
          <CardsVerMais>
            {outros.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectDetails>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <TechList>
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </TechList>
                  <ProjectLinks>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Projeto
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Código Fonte
                    </a>
                  </ProjectLinks>
                </ProjectDetails>
              </ProjectCard>
            ))}
          </CardsVerMais>
        </>
      )}
      <ShowMoreButton onClick={handleShowMore}>
        {showMore ? 'Ver menos' : 'Ver mais'}
      </ShowMoreButton>
    </PortfolioContent>
  )
}

export default Projetos
