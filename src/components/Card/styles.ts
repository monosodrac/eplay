import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding: 24px;
  margin-bottom: 40px;
  border-radius: 8px;
  background-color: ${cores.cinza};

  h2,
  h3 {
    margin-bottom: 24px;
    font-weight: bold;
    font-size: 18px;
    color: ${cores.branca};
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    line-height: 22px;
    font-size: 14px;
  }
`
