import styled from 'styled-components'

export const HabContent = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
  background-color: #c543;
  border-radius: 16px;

  .ajuste {
    height: 126px;
  }

  h2 {
    margin: 32px 0;
    background-color: red;
    padding: 8px;
    border-radius: 16px;
  }

  h3 {
    margin: 24px 0;
  }
`

export const HabList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  li {
    margin-right: 36px;
    margin-bottom: 24px;
    text-align: center; /* Centraliza o conteúdo dentro do <li> */

    @media (max-width: 768px) {
      margin: 0;
    }

    p {
      font-weight: bold;
      background-color: green;
      border-radius: 4px;
    }
  }

  .ajuste {
    margin-top: 48px;
    height: 43px;
  }
`

export const Icone = styled.img`
  width: 100px;
  height: 126px;
  margin-top: 18px;
  align-items: center;
`
