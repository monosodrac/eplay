import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  padding: 8px 16px;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  color: ${colors.white};
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border: 2px solid ${colors.white};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  color: ${colors.white};
  text-decoration: none;
`
