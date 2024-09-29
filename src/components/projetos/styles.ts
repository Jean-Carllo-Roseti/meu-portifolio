import styled from 'styled-components'

export const PortfolioContent = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
  padding-top: 38px;

  @media (max-width: 768px) {
    display: block;
  }

  h2 {
    text-align: center;
    margin: 0 0 32px 0;
    background-color: #c3d2eb;
    padding: 8px;
    border-radius: 16px;
    color: #000;
  }
`
export const ParaStick = styled.div`
  padding: 16px;
  background-color: #333333;
  border-radius: 16px;
  padding-bottom: 24px;

  .maisUma {
    padding: 16px;
    background-color: #c3d2eb;
    border-radius: 16px;
  }

  h3 {
    color: #000;
    margin-bottom: 12px;
  }
`

export const ProjectCard = styled.div`
  padding: 16px;
  background-color: #333333;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease;
  width: calc(50% - 32px);
  color: #000;

  @media (max-width: 768px) {
    width: auto;
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 228px;
  border-radius: 8px;
`

export const ProjectDetails = styled.div`
  background-color: #7b94f1;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;

  h3 {
    margin-top: 0;
  }

  p {
    margin: 8px 0;
  }
`

export const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    margin-bottom: 8px;
    margin-right: 8px;
    background-color: #e1e1e1;
    border-radius: 4px;
    padding: 4px 8px;
  }
`

export const ProjectLinks = styled.div`
  margin-top: 16px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;

  .fullStack {
    margin-top: 12px;
    display: flex;
    justify-content: space-evenly;

    a {
      margin: 0 6px;
    }
  }

  a {
    text-align: center;
    color: #fff;
    background-color: #333333;
    padding: 8px;
    border-radius: 8px;

    @media (max-width: 768px) {
      padding: 6px 4px;
    }

    &:hover {
      background-color: #000;
    }
  }
`
export const CardsColunas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    display: block;
  }
`
export const CardsVerMais = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: block;
  }
`

export const ShowMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #333333;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 120px;

  &:hover {
    background-color: #000;
  }
`
export const Inv = styled.div`
  overflow: hidden;
  max-height: 0;
  transition: max-height 1.5s ease-in-out;

  &.is-open {
    max-height: 2000px;

    @media (max-width: 768px) {
      max-height: 2468px;
    }
  }

  .preencher {
    padding-right: 76px;
  }
`
