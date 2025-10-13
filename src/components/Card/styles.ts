import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  padding: 24px;
  margin-bottom: 40px;
  border-radius: 8px;
  background-color: ${colors.gray};

  h2,
  h3 {
    margin-bottom: 24px;
    font-weight: bold;
    font-size: 18px;
    color: ${colors.white};
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    line-height: 22px;
    font-size: 14px;
  }
`
