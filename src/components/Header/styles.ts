import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin-bottom: 80px;
  border-radius: 16px;
  background-color: ${cores.cinza};

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
