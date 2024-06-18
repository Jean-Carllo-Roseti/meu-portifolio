import styled from 'styled-components'

export const HabContent = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;

  padding-top: 62px;

  .ajuste {
    height: 126px;
  }

  h3 {
    padding: 24px 0;
  }
`
export const UmaOutra = styled.div`
  background-color: #333333;
  padding: 16px;
  border-radius: 16px;

  h2 {
    text-align: center;
    margin: 0 0 32px 0;
    background-color: #c3d2eb;
    padding: 8px;
    border-radius: 16px;
  }

  .forte {
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    background-color: #c3d2eb;
  }

  .desenvolve {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: #c3d2eb;
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
    text-align: center;

    @media (max-width: 768px) {
      margin: 0;
    }

    p {
      color: #fff;
      font-weight: bold;
      background-color: #333333;
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
// export const Radius = style.div`
// `
