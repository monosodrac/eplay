import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { cores } from '../../styles'

export const Container = styled.footer`
  padding: 32px 0;
  background-color: ${cores.cinza};
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.branca};
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(HashLink)`
  margin-right: 8px;
  color: ${cores.cinzaClaro};
  text-decoration: none;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
