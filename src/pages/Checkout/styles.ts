import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;
  margin-top: ${(props) => props.marginTop || '0'};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
  }

  input,
  select {
    padding: 0 8px;
    border: 1px solid ${cores.branca};
    height: 32px;
    width: 100%;
    background-color: ${cores.branca};
  }
`

export const TabButton = styled.button<TabButtonProps>`
  padding: 0 8px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  height: 32px;
  font-weight: bold;
  font-size: 14px;
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preta)};
  color: ${cores.branca};
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
