import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  font-weight: bold;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 340px;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Precos = styled.p`
  margin-top: 24px;
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`
