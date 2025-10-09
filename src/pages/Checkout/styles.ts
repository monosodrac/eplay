import styled from 'styled-components'
import { cores } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
  }

  input {
    padding: 0 8px;
    border: 1px solid ${cores.branca};
    height: 32px;
    width: 100%;
    background-color: ${cores.branca};
  }
`
