import styled from 'styled-components'

export const SbContainer = styled.div`
  padding-top: 58px;

  h2 {
    text-align: center;
    margin: 0 0 32px 0;
    background-color: #c3d2eb;
    padding: 8px;
    border-radius: 16px;
  }
`
export const SbOrganiza = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  border-radius: 16px;
  background-color: #333333;
  padding: 16px;
`

export const SbContent = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`
export const Descricao = styled.div`
  background-color: #c3d2eb;
  padding: 24px 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  @media (max-width: 768px) {
    border-radius: 0;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }
`
export const Imagem = styled.div`
  padding: 8px 16px;
  background-color: #c3d2eb;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  @media (max-width: 768px) {
    padding: 24px 0;
    border-radius: 0;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }

  img {
    width: 280px;
    height: 280px;
    border-radius: 80px;
    margin-bottom: 16px;
    margin-top: 16px;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      aling-items center;
      margin: 16px auto;
    }
  }
`
export const Contatos = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    color: #333;
    transition: color 0.3s ease;

    &:hover {
      color: #0073b1;
    }

    &:nth-child(1):hover {
      color: #6e5494;
    }

    &:nth-child(3):hover {
      color: #c71610;
    }

    &:nth-child(4):hover {
      color: #25d366;
    }

    &:nth-child(5):hover {
      color: #f1f;
    }
  }
`
