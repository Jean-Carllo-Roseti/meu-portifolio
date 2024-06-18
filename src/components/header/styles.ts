import styled from 'styled-components'

export const HContainer = styled.header`
  background-color: #365995;
  position: sticky;
  top: 0;
  padding: 10px 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  &.scrolled {
    background-color: rgba(51, 51, 51, 0.5);
  }

  h1 {
    color: #fff;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 44px;
  }
`

export const Hcontent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Hlist = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin-left: 20px;

    @media (max-width: 768px) {
      margin-top: 8px;
      margin-bottom: 10px;
    }

    a {
      padding: 4px 8px;
      background-color: #333333;
      color: #fff;
      border-radius: 8px;

      &:hover {
        background-color: #000;
      }
    }
  }
`

export const HamburguerContent = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  height: 24px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    height: 4px;
    width: 100%;
    background-color: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
    position: absolute;
  }

  :nth-child(1) {
    top: 20px;
  }

  :nth-child(2) {
    top: 10px;
    bottom: 10px;
  }

  :nth-child(3) {
    bottom: 20px;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 10px;
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 10px;
  }
`

export const HamLink = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    overflow: hidden;
    max-height: 0;
    transition: max-height 1s ease-in-out;

    &.is-open {
      max-height: 200px;
    }
  }
`
