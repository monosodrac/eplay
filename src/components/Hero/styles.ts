import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  padding-top: 16px;

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    content: '';
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
  }
`

export const Infos = styled.div`
  padding: 16px;
  max-width: 290px;
  font-weight: bold;
  background-color: ${colors.black};

  h2 {
    font-size: 32px;
  }

  p {
    margin: 16px 0;
    font-size: 18px;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
