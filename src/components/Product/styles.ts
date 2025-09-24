import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  position: relative;
  display: block;
  padding: 8px;
  border-radius: 8px;
  background-color: ${cores.cinza};
  color: ${cores.branca};
  text-decoration: none;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 16px;
`

export const Descricao = styled.p`
  display: block;
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
