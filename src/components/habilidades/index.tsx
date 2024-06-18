import HTML from '../../assets/images/tetandoHTML.png'
import CSS from '../../assets/images/tentandoCSS.svg'
import Escudo from '../../assets/images/novaJava.png'
import RC from '../../assets/images/rct.png'
import RD from '../../assets/images/Redux.png'
import Boot from '../../assets/images/BootStrap51.png'
import Java from '../../assets/images/JAvi.webp'
import Sql from '../../assets/images/newSql.svg'
import Ang from '../../assets/images/novaAngular.png'
import Cypress from '../../assets/images/cypress-icon.png'
import Jest from '../../assets/images/jest.png'
import Sass from '../../assets/images/Sass_Logo_Color.svg'
import Less from '../../assets/images/Less.png'
import Gulp from '../../assets/images/gulp.png'
import Grunt from '../../assets/images/newGrunt.svg'
import Git from '../../assets/images/Git_icon.svg'

import { HabContent, HabList, Icone, UmaOutra } from './styles'

const Habilidades = () => {
  return (
    <HabContent>
      <UmaOutra>
        <h2>Habildiades</h2>
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
        <div className="desenvolve">
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
