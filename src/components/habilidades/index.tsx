import HTML from '../../assets/images/NovaHtml.png'
import CSS from '../../assets/images/NovoCSS.png'
import Escudo from '../../assets/images/novaJava.png'
import RC from '../../assets/images/React.png'
import RD from '../../assets/images/Redux.png'
import Boot from '../../assets/images/BootStrap51.png'
import Java from '../../assets/images/JAvi.webp'
import Sql from '../../assets/images/mySql.png'
import Ang from '../../assets/images/Ang.png'
import Cypress from '../../assets/images/cypress.jpeg'
import Jest from '../../assets/images/jest.png'
import Sass from '../../assets/images/Sass.png'
import Less from '../../assets/images/Less.png'
import Gulp from '../../assets/images/gulp.png'
import Grunt from '../../assets/images/Grunt.png'
import Git from '../../assets/images/Git.png'

import { HabContent, HabList, Icone, UmaOutra } from './styles'

const Habilidades = () => {
  return (
    <HabContent>
      <UmaOutra>
        <h2>Habildiades</h2>
        <div>
          <h3>Fortes</h3>
          <HabList>
            <li>
              <p>HTML</p>
              <Icone src={HTML} alt="imagem do logo tipo do html" />
            </li>
            <li>
              <p>CSS</p>
              <Icone src={CSS} alt="imagem do logo tipo do css" />
            </li>
            <li>
              <p>JavaScript</p>
              <Icone src={Escudo} alt="imagem do logo tipo do javaScript" />
            </li>
            <li>
              <p>React</p>
              <Icone src={RC} alt="imagem do logo tipo do React" />
            </li>
            <li>
              <p>Redux</p>
              <Icone src={RD} alt="imagem do logo tipo do Redux" />
            </li>
            <li>
              <p>Cypress</p>
              <Icone src={Cypress} alt="imagem do logo tipo do Cypress" />
            </li>
            <li>
              <p>Sass</p>
              <Icone src={Sass} alt="imagem do logo tipo do Sass" />
            </li>
            <li>
              <p>Less</p>
              <img
                className="ajuste"
                src={Less}
                alt="imagem do logo tipo do Less"
              />
            </li>
            <li>
              <p>Git</p>
              <Icone src={Git} alt="imagem do logo tipo do Git " />
            </li>
          </HabList>
        </div>
        <div>
          <h3>Desenvolvimento</h3>
          <HabList>
            <li>
              <p>Java</p>
              <Icone src={Java} alt="imagem do logo tipo do Java" />
            </li>
            <li>
              <p>Angular</p>
              <Icone src={Ang} alt="imagem do logo tipo do Angular" />
            </li>
            <li>
              <p>MySql</p>
              <Icone src={Sql} alt="Mysql" />
            </li>
            <li>
              <p>Gulp</p>
              <Icone src={Gulp} alt="imagem do logo tipo do Gulp" />
            </li>
            <li>
              <p>Grunt</p>
              <Icone src={Grunt} alt="imagem do logo tipo do Grunt" />
            </li>
            <li>
              <p>BootStrap</p>
              <Icone src={Boot} alt=" imagem do logo tipo do BootStrap" />
            </li>
            <li>
              <p>Jest</p>
              <Icone src={Jest} alt="imagem do logo tipo do Jest" />
            </li>
          </HabList>
        </div>
      </UmaOutra>
    </HabContent>
  )
}

export default Habilidades
