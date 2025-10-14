import styled from 'styled-components'
import { Breakpoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${Breakpoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`

export const HeaderBar = styled.header`
  padding: 24px;
  margin-bottom: 80px;
  border-radius: 16px;
  background-color: ${colors.gray};

  a,
  span {
    text-decoration: none;
    font-weight: bold;
    color: ${colors.white};
  }

  h1 {
    line-height: 0;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${Breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: ${Breakpoints.desktop}) {
    &.is-open {
      display: none;
    }
  }

  @media (max-width: ${Breakpoints.tablet}) {
    &.is-open {
      display: block;
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${Breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    display: block;
    margin-bottom: 4px;
    height: 2px;
    width: 100%;
    background-color: ${colors.white};
  }

  @media (min-width: ${Breakpoints.tablet}) {
    display: none;
  }
`
