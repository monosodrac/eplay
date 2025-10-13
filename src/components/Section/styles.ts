import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }

  p {
    max-width: 640px;
    font-size: 14px;
    line-height: 22px;
  }
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 40px;
`
