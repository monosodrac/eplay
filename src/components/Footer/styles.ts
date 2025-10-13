import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { colors } from '../../styles'

export const Container = styled.footer`
  padding: 32px 0;
  margin-top: 40px;
  font-size: 14px;
  background-color: ${colors.gray};
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(HashLink)`
  margin-right: 8px;
  color: ${colors.lightGray};
  text-decoration: none;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
