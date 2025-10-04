import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import fechar from '../../assets/images/fechar.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  padding: 40px 16px 0;
  max-width: 360px;
  width: 100%;
  background-color: ${cores.cinza};
  z-index: 1;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;

  img {
    margin-right: 24px;
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-weight: bold;
    font-size: 16px;
    color: ${cores.branca};
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 16px;
    color: ${cores.branca};
  }

  ${TagContainer} {
    margin-top: 8px;
    margin-bottom: 16px;
    margin-right: 8px;
  }

  button {
    position: absolute;
    top: 8px;
    right: 0;
    background-image: url(${fechar});
    height: 16px;
    width: 16px;
    border: none;
    background-color: transparent;
  }
`

export const Quantity = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
`

export const Prices = styled.p`
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`
