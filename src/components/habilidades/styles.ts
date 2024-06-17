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

  .ajuste {
    margin-top: 48px;
    height: 43px;
  }

  li {
    margin-right: 36px;
    margin-bottom: 24px;

    p {
      font-weight: bold;
    }
  }
`

export const Icone = styled.img`
  width: 100px;
  height: 126px;
  margin-top: 18px;
  align-items: center;
`
