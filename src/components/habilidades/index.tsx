import HTML from '../../assets/images/tetandoHTML.png'
import CSS from '../../assets/images/tentandoCSS.svg'
import Escudo from '../../assets/images/novaJava.png'
import RC from '../../assets/images/rct.png'
import RD from '../../assets/images/Redux.png'
import Boot from '../../assets/images/BootStrap51.png'
import Java from '../../assets/images/JAvi.webp'
import Ang from '../../assets/images/novaAngular.png'
import Cypress from '../../assets/images/cypress-icon.png'
import Jest from '../../assets/images/jest.png'
import Sass from '../../assets/images/Sass_Logo_Color.svg'
import Less from '../../assets/images/Less.png'
import Gulp from '../../assets/images/gulp.png'
import Grunt from '../../assets/images/newGrunt.svg'
import Git from '../../assets/images/Git_icon.svg'
import Hibernate from '../../assets/images/hibernate2.svg'
import PostegreSQL from '../../assets/images/PostgreSQL2.svg'
import JUnit from '../../assets/images/JUnit2.svg'
import MongoDB from '../../assets/images/mongodb2.svg'
import SpringBoot from '../../assets/images/spring-boot.svg'
import Gato from '../../assets/images/gatoServer.svg'

import { HabContent, HabList, Icone, UmaOutra } from './styles'

const Habilidades = () => {
  return (
    <HabContent>
      <UmaOutra>
        <h2>Habilidades</h2>
        <div className="forte">
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
              <p>BootStrap</p>
              <Icone src={Boot} alt=" imagem do logo tipo do BootStrap" />
            </li>
            <li>
              <p>Cypress</p>
              <Icone src={Cypress} alt="imagem do logo tipo do Cypress" />
            </li>
            <li>
              <p>Jest</p>
              <Icone src={Jest} alt="imagem do logo tipo do Jest" />
            </li>
            <li>
              <p>Git</p>
              <Icone src={Git} alt="imagem do logo tipo do Git " />
            </li>
          </HabList>
        </div>
        <div className="desenvolve">
          <h3>Desenvolvimento</h3>
          <HabList>
            <li>
              <p>Java</p>
              <Icone src={Java} alt="imagem do logo tipo do Java" />
            </li>
            <li>
              <p>JUnit</p>
              <Icone src={JUnit} alt="imagem do logo tipo do JUnit" />
            </li>
            <li>
              <p>Spring Boot</p>
              <Icone src={SpringBoot} alt="imagem do logo tipo do Java" />
            </li>
            <li>
              <p>Hibernate</p>
              <Icone src={Hibernate} alt="imagem do logo tipo do Hibernate" />
            </li>
            <li>
              <p>PostgreSQL</p>
              <Icone src={PostegreSQL} alt="imagem do logo do PostgreeSQL" />
            </li>
            <li>
              <p>MongoDB</p>
              <Icone src={MongoDB} alt="imagem do logo tipo do MongoDB" />
            </li>
            <li>
              <p>Tom Cat</p>
              <Icone src={Gato} alt="imagem do logo tipo do MongoDB" />
            </li>
            <li>
              <p>Angular</p>
              <Icone src={Ang} alt="imagem do logo tipo do Angular" />
            </li>
            <li>
              <p>Gulp</p>
              <Icone src={Gulp} alt="imagem do logo tipo do Gulp" />
            </li>
            <li>
              <p>Grunt</p>
              <Icone src={Grunt} alt="imagem do logo tipo do Grunt" />
            </li>
          </HabList>
        </div>
      </UmaOutra>
    </HabContent>
  )
}

export default Habilidades
